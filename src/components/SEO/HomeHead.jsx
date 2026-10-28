import { useHead } from '@unhead/react'

export default function HomeHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: "The home page of Johann Duque's portfolio. A quick overview of his projects." },
      { name: 'keywords', content: 'portfolio, ux design, web design, figma, creative work, development, coding, product designer' },
      { name: 'author', content: 'Johann Duque' },
      { property: 'og:title', content: "Johann Duque's UX Design and Development Portfolio" },
      { property: 'og:description', content: "Johann Duque's portfolio illustrating his experience as a UX Designer and Front-end Web Developer" },
      { property: 'og:image', content: 'https://johannduque.com/img/banner-img.png' },
      { property: 'og:url', content: 'https://johannduque.com' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}