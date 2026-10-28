import { useHead } from '@unhead/react'

export default function TacohavenHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'Designing and developing a website using web technologies.' },
      { property: 'og:title', content: 'Taco Haven | A stunning web design and front-end development project showcasing modern web technologies' },
      { property: 'og:description', content: 'Explore a dynamic web development and design project showcasing my expertise in HTML, JavaScript, CSS, and jQuery' },
      { property: 'og:image', content: 'https://johannduque.com/img/Tachohaven-banner.png' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}