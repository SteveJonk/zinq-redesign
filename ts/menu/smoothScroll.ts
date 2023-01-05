import { scrollIntoViewWithOffset } from '../utils/scrollIntoViewWithOffset'

export const smoothScrollLinks = () => {
  const menuLinks = document.querySelectorAll('#navbar li a')
  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const currentTarget = event.currentTarget as HTMLAnchorElement
      const anchor = currentTarget.hash
      scrollIntoViewWithOffset(anchor, 30)
    })
  })
}
