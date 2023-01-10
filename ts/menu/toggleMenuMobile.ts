import gsap from 'gsap'

export const toggleMenu = () => {
  const openButton = document.getElementById('open_menu')
  const closeButton = document.getElementById('close_menu')
  openButton.addEventListener('click', () => {
    openMenu()
  })
  closeButton.addEventListener('click', () => {
    closeMenu()
  })
}

export const openMenu = () => {
  gsap.to('#navigation', {
    x: '100%',
    ease: 'slow(0.5, 0.4, false)',
  })
}
export const closeMenu = () => {
  gsap.to('#navigation', {
    x: '0',
    duration: 1.2,
    ease: 'power2.out',
  })
}
