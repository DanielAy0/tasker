
const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('mobile-btn');
    // console.log("clicked")
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('mobile-btn');
})