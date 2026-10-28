import { useHead } from '@unhead/react'

export default function MymoriHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'A portfolio project showcasing a hackathon experience with group members tackling mental health and creating immersive experiences.' },
      { property: 'og:title', content: 'MyMori | UX Design Hackathon Challenge Focused on creativity and expression' },
      { property: 'og:description', content: 'A portfolio project showcasing a hackathon experience with group members tackling mental health and creating immersive experiences' },
      { property: 'og:image', content: 'https://johannduque.com/img/mymori-banner.png' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}