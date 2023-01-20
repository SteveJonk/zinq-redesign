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
    ease: 'slow(0.3, 0.2, false)',
    delay: 0.2,
  })
  document.documentElement.style.overflowY = 'hidden'
}
export const closeMenu = () => {
  gsap.to('#navigation', {
    x: '0',
    duration: 0.6,
    ease: 'power2.out',
  })
  document.documentElement.style.overflowY = 'auto'
}
