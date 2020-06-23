const container = document.querySelector('.container')
const text = document.querySelector('#text')
const counter = document.querySelector('#counter')
const pointer = document.querySelector('.pointer-container')
const gradient = document.querySelector('.gradient-circle')

const totalTime = 3000
var breath = 0
const totalBreats = 30
const breatheTime = 2000

breatheAnimation()

//"classic" breathing exercise by Brad Traversy
function breatheAnimation() {
    if (breath === totalBreats) {
        clearInterval(interval)
        var deg = 0
        var tick = () => {
            gradient.style.background = `linear-gradient(${deg++}deg, #f76967 0%, #4ab3b6 100%)`
            requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        breathHold()
    } else {
        text.innerHTML = 'Fully in!'
        container.className = 'container grow'
        pointer.className = 'pointer-container'
        counter.innerHTML = breath.toString() + "/30"
        gradient.style.background = `conic-gradient(#f76967 0%, #fc967f 65%, #40a2ad 80%, #4ab3b6 100%)`

        setTimeout(() => {
            text.innerHTML = 'Let it go!'
            container.className = 'container shrink'

            breath += 1

        }, breatheTime)
    }
}

function stopWatch(timer, desc) {
    desc === "long" ? firstTimer() : secondTimer()

    function firstTimer() {
        timer === 0 ? counter.innerHTML = "" : counter.innerHTML = timer.toString()
        if (timer === 0) {
            text.innerHTML = 'Fully out!'
            breathHoldShort()
        } else {
            timer--
            setTimeout(firstTimer, 1000)
        }
    }

    function secondTimer() {
        timer === 0 ? counter.innerHTML = "" : counter.innerHTML = timer.toString()
        if (timer === 0) {
            text.innerHTML = 'Fully out!'
            container.className = 'container shrink'
            interval = setInterval(breatheAnimation, totalTime)
            breath = 0
        } else {
            timer--
            setTimeout(secondTimer, 1200)
        }
    }
}

function breathHold() {
    text.innerHTML = 'Hold your breath for one minute...'
    pointer.className = 'no-display'

    stopWatch(60, "long")
}

function breathHoldShort() {
    container.className = 'container grow'
    text.innerHTML = 'Fully in and hold for a moment!'
    stopWatch(15, "short")
}

var interval = setInterval(breatheAnimation, totalTime)