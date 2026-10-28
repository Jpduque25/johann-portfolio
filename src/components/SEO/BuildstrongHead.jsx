import { useHead } from '@unhead/react'

export default function BuildstrongHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'A portfolio project showcasing the redesign and marketing initiatives for BuildStrong.' },
      { property: 'og:title', content: 'BuildStrong | Redesign and Marketing Promotion of the App' },
      { property: 'og:description', content: 'A Product Design project leading the redesign and marketing initiatives to boost user engagement, drive downloads, and grow brand awareness.' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}