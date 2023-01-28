import { scrollIntoViewWithOffset } from '../utils/scrollIntoViewWithOffset'
import { closeMenu } from './toggleMenuMobile'

export const smoothScrollLinks = () => {
  const menuLinks = document.querySelectorAll('a')
  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const currentTarget = event.currentTarget as HTMLAnchorElement
      if (currentTarget.hash.startsWith('#')) {
        event.preventDefault()
        const anchor = currentTarget.hash
        scrollIntoViewWithOffset(anchor, 50)
        closeMenu()
      }
    })
  })
}
