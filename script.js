const navigationToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

navigationToggle.addEventListener('click', () => {
    navigationToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})