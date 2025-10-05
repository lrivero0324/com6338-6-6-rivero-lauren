const hamburgerBtn = document.querySelector('.hamburger-btn')
const hamburgerMenu = document.querySelector('.hamburger-menu')

function toggleMenu() {
    const isMenuOpen = hamburgerMenu.classList.contains('show-menu')
    hamburgerMenu.classList.toggle('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', !isMenuOpen)
}

hamburgerBtn.addEventListener('click', toggleMenu)

document.addEventListener('click', function(e) {
    const isMenuOpen = hamburgerMenu.classList.contains('show-menu')
    if (!isMenuOpen) return
    
    if (!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        toggleMenu()
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
        toggleMenu()
        hamburgerBtn.focus()
    }
})
