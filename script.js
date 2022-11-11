const toggle = document.getElementsByClassName("toggle-button")[0]
const navLinks = document.getElementsByClassName("navbar-hid")[0]

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
