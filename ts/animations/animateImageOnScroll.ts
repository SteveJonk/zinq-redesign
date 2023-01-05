import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const imgSelector = '.page img'

export const animateImageOnScroll = () => {
  const scrollElements = gsap.utils.toArray(imgSelector)
  scrollElements.forEach((element: any) => {
    gsap.from(element, {
      opacity: 0,
      y: 24,
      x: 30,
      duration: 0.8,
    })

    gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scrollTrigger: {
        end: '0 60%',
        start: '0 100%',
        trigger: element,
        scrub: 0.5,
      },
    })
  })
}
