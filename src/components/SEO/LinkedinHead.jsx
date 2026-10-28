import { useHead } from '@unhead/react'

export default function LinkedinHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'A case study on improving elearning experiences for LinkedIn Learning users.' },
      { property: 'og:title', content: 'LinkedIn Learning UX Case Study | Improving E-Learning User Satisfaction and Reducing Bounce Rates' },
      { property: 'og:description', content: 'A UX Design Case Study showcasing the pertaining issues of e-learning platforms and the solutions to improve bounce rates and user satisfaction' },
      { property: 'og:image', content: 'https://johannduque.com/img/linkedin-banner.png' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}