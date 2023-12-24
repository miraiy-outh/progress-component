function changeValue(event) {
    let value = event.target.value
    const min = event.target.min
    const max = event.target.max
    value = enforceMinMax(value, min, max)
    event.target.value = value
    document.documentElement.style.setProperty('--progress-percent', `${value}%`);
}

function enforceMinMax(value, min, max) {
    if (value === "") {
        return min
    }
    while (value[0] === '0' && value.length > 1) {
        value = value.substring(1, value.length)
    }
    if (parseInt(value) < parseInt(min)) {
        value = min
    }
    if (parseInt(value) > parseInt(max)) {
        value = max
    }
    return value
}

function addAnimation(event) {
    progressBar.classList.toggle('animated');
}

function addHiding(event) {
    progressBar.classList.toggle('hidden');
}

const progressBar = document.querySelector('.progress__bar')

const inputValue = document.querySelector('#value')
inputValue.addEventListener('input', changeValue)

const animateSwitch = document.querySelector('#animate-switch')
animateSwitch.addEventListener('change', addAnimation)

const hideSwitch = document.querySelector('#hide-switch')
hideSwitch.addEventListener('change', addHiding)