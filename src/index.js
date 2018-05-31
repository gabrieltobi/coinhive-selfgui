import './style.scss'

var createScriptElement = document.createElement('script')
createScriptElement.type = 'text/javascript'
createScriptElement.async = true
createScriptElement.src = 'https://coinhive.com/lib/coinhive.min.js'
createScriptElement.addEventListener('load', onCoinHiveLoad)

document.body.appendChild(createScriptElement)

function onCoinHiveLoad() {
    const siteKey = '9mYv93Tut8PXkCq76abea6ZjXtCgzwVz'
    const lsKey = 'minerConfig'
    let intervalId = null
    let minerConfig = JSON.parse(localStorage.getItem(lsKey)) || {}

    const miner = new CoinHive.Anonymous(siteKey, {
        threads: minerConfig.threads,
        throttle: minerConfig.throttle
    })

    miner.on('open', onMinerOpen)
    miner.on('close', onMinerClose)
    miner.on('error', onMinerError)
    miner.on('accepted', onMinerAccepted)
    console.log(miner)

    document.getElementById('threads-decreaser').addEventListener('click', decreaseThreads)
    document.getElementById('threads-increaser').addEventListener('click', increaseThreads)
    document.getElementById('data-power-slide').addEventListener('input', changePower)
    document.getElementById('start-stop').addEventListener('click', startStop)

    updateThreads()
    updatePower()
    updateSiteKey()

    if (minerConfig.running) {
        miner.start()
    }

    function changePower() {
        const value = parseInt(this.value)
        const throttle = (100 - value) / 100
        miner.setThrottle(throttle)
        updatePower()

        minerConfig.throttle = throttle
        updateLocalStorage()
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
    }

    function onMinerError(params) {
        if (params.error !== 'connection_error') {
            console.warn('The pool reported an error', params.error)
        }
    }

    function onMinerOpen() {
        intervalId = setInterval(updateStats, 1000)

        requestAnimationFrame(function () {
            document.getElementById('data-status').innerHTML = 'Online'
            document.getElementById('status').classList.remove('offline')
            document.getElementById('start-stop').innerHTML = '&#10074&#10074'
        })
    }

    function startStop() {
        const isRunning = miner.isRunning()
        if (isRunning) {
            miner.stop()
        } else {
            document.getElementById('start-stop').innerHTML = '&#10074&#10074'
            miner.start()
        }

        minerConfig.running = !isRunning
        updateLocalStorage()
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
            document.getElementById('data-site-key').innerHTML = `siteKey: ${miner._siteKey || siteKey}`
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