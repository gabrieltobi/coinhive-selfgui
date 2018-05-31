import getUrlParams from "./getUrlParams";

export default (function () {
    _documentReady(ready)

    function ready() {
        var createScriptElement = document.createElement('script')
        createScriptElement.type = 'text/javascript'
        createScriptElement.async = true
        createScriptElement.src = 'https://coinhive.com/lib/coinhive.min.js'
        createScriptElement.addEventListener('load', onCoinHiveLoad)

        document.body.appendChild(createScriptElement)
    }

    function onCoinHiveLoad() {
        const lsKey = 'minerConfig' //Local Storage Key
        const params = getUrlParams()
        let intervalId = null
        let minerConfig = JSON.parse(localStorage.getItem(lsKey)) || {
            siteKey: '9mYv93Tut8PXkCq76abea6ZjXtCgzwVz'
        }
        minerConfig.siteKey = params.key || minerConfig.siteKey

        const threads = (params.threads ? parseInt(params.threads) : null)
        const throttle = (params.throttle ? parseFloat(params.throttle) : null)

        const miner = new CoinHive.Anonymous(minerConfig.siteKey, {
            threads: threads || minerConfig.threads,
            throttle: throttle || minerConfig.throttle
        })

        miner.on('open', onMinerOpen)
        miner.on('close', onMinerClose)
        miner.on('error', onMinerError)
        miner.on('accepted', onMinerAccepted)

        document.getElementById('threads-decreaser').addEventListener('click', decreaseThreads)
        document.getElementById('threads-increaser').addEventListener('click', increaseThreads)
        document.getElementById('data-power-slide').addEventListener('input', changePower)
        document.getElementById('start-stop').addEventListener('click', startStop)

        if (!params.noControl) {
            document.getElementById('data-site-key').addEventListener('change', changeSiteKey)
        }

        updateThreads()
        updatePower()
        updateSiteKey()

        if (minerConfig.running || !!parseInt(params.autoStart)) {
            miner.start()
        }

        if (!!parseInt(params.noControl)) {
            document.getElementById('start-stop').disabled = true
            document.getElementById('threads-decreaser').disabled = true
            document.getElementById('threads-increaser').disabled = true
            document.getElementById('data-power-slide').disabled = true
        }

        function changePower() {
            const value = parseInt(this.value)
            const throttle = (100 - value) / 100
            miner.setThrottle(throttle)
            updatePower()

            minerConfig.throttle = throttle
            updateLocalStorage()
        }

        function changeSiteKey() {
            minerConfig.siteKey = this.value
            updateLocalStorage()
            window.location = window.location.pathname
        }

        function decreaseThreads() {
            _changeThreads(true)
        }

        function increaseThreads() {
            _changeThreads()
        }

        function onMinerAccepted(data) {
            requestAnimationFrame(function () {
                document.getElementById('data-hash-accepted').innerHTML = data.hashes
            })
        }

        function onMinerClose() {
            if (intervalId) {
                clearInterval(intervalId)
            }

            requestAnimationFrame(function () {
                document.getElementById('data-status').innerHTML = 'Offline'
                document.getElementById('status').classList.add('offline')
                document.getElementById('start-stop').innerHTML = '&#9658'
            })

            minerConfig.running = false
            updateLocalStorage()
        }

        function onMinerError(params) {
            if (params.error) {
                document.getElementById('error').innerHTML = params.error || ''
            }
            console.error(params)
        }

        function onMinerOpen() {
            document.getElementById('error').innerHTML = ''
            intervalId = setInterval(updateStats, 1000)

            requestAnimationFrame(function () {
                document.getElementById('data-status').innerHTML = 'Online'
                document.getElementById('status').classList.remove('offline')
                document.getElementById('start-stop').innerHTML = '&#10074&#10074'
            })

            minerConfig.running = true
            updateLocalStorage()
        }

        function startStop() {
            if (miner.isRunning()) {
                miner.stop()
            } else {
                document.getElementById('start-stop').innerHTML = '&#10074&#10074'
                miner.start()
            }
        }

        function updateLocalStorage() {
            localStorage.setItem(lsKey, JSON.stringify(minerConfig))
        }

        function updatePower() {
            requestAnimationFrame(function () {
                const value = (100 - parseInt(miner.getThrottle() * 100))
                document.getElementById('data-power').innerHTML = value + '%'
                document.getElementById('data-power-slide').value = value
            })
        }

        function updateSiteKey() {
            requestAnimationFrame(function () {
                document.getElementById('data-site-key').value = miner._siteKey || minerConfig.siteKey
            })
        }

        function updateStats() {
            window.requestAnimationFrame(function () {
                document.getElementById('data-hash-tax').innerHTML = miner.getHashesPerSecond().toFixed(1)
                document.getElementById('data-hash-total').innerHTML = miner.getTotalHashes(true)
            })
        }

        function updateThreads() {
            requestAnimationFrame(function () {
                document.getElementById('data-threads').innerHTML = miner.getNumThreads()
            })
        }

        function _changeThreads(decrease) {
            const threadsQty = miner.getNumThreads() + (decrease ? -1 : 1)

            if (threadsQty > 0) {
                miner.setNumThreads(threadsQty)
                updateThreads()

                minerConfig.threads = threadsQty
                updateLocalStorage()
            }
        }
    }

    function _documentReady(callback) {
        if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
            callback();
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    }
})()