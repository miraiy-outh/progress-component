function changeValue(event) {
    const value = event.target.value
    document.documentElement.style.setProperty('--progress-percent', `${value}%`);
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