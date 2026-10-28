import { useHead } from '@unhead/react'

export default function InmHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'A portfolio project about a student application for an Institute of New Media.' },
      { property: 'og:title', content: 'Institute of New Media (INM) | A UX Design project to create a student application purposed for providing tools and resources to excel in university' },
      { property: 'og:description', content: 'A UX/UI design project creating a reliable student application for accessing university information, course tools, and upcoming events' },
      { property: 'og:image', content: 'https://johannduque.com/img/inm-banner.png' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}