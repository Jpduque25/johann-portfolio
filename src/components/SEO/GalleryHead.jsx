import { useHead } from '@unhead/react'

export default function GalleryHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: "A gallery showcasing Johann Duque's passion and creativity through personal and professional projects." },
      { property: 'og:title', content: "A Creative Designer's Portfolio | Personal and Professional Projects" },
      { property: 'og:description', content: 'A gallery that demonstrates my passion as a creative' },
      { property: 'og:image', content: 'https://johannduque.com/img/mypfp.jpg' },
      { property: 'og:url', content: 'https://johannduque.com/gallery' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}