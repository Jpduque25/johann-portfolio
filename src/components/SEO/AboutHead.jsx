import { useHead } from '@unhead/react'

export default function AboutHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'A more in-depth look at the creator of this portfolio and his personal interests and hobbies.' },
      { property: 'og:title', content: "About Me | Designer's Background, Experience, and Interests" },
      { property: 'og:description', content: 'An in-depth description of myself, what inspires me as a designer and the work-experience I have as a digital designer' },
      { property: 'og:image', content: 'https://johannduque.com/img/mypfp.jpg' },
      { property: 'og:type', content: 'website' },
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-WY0B42VLNZ', async: true },
    ],
  })

  return null
}