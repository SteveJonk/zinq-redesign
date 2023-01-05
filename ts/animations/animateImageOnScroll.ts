import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const imgSelector = '.page img'

export const animateImageOnScroll = () => {
  const scrollElements = gsap.utils.toArray(imgSelector)
  scrollElements.forEach((element: any) => {
    gsap.set(element, {
      opacity: 0,
      y: 24,
    })

    element.anim = gsap.to(element, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: element,
      },
    })
  })
}
