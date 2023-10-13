const navigationToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

navigationToggle.addEventListener('click', () => {
    navigationToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

type = "text/javascript"
/*jshint esversion: 6 */
document.querySelectorAll('nav a')
    .forEach(e => e.addEventListener('click', _ => change(e.dataset.id)));

function change(n) {
    let panels = document.querySelectorAll('main div');
    panels.forEach(p => p.classList.remove('active'));
    panels[n - 1].classList.add('active');
}