import { useHead } from '@unhead/react'

export default function BrandGuidelinesHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { property: 'og:title', content: 'Brand Guidelines | Lorem Ipsum Dolor Sit Amet' },
      { property: 'og:description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}
