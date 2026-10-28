import { useHead } from '@unhead/react'

export default function FlowspaceHead() {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'A portfolio project showcasing my development skill using React JS to create a focus application.' },
      { property: 'og:title', content: 'Flow Space | Interactive Focus Timer Built with React JS' },
      { property: 'og:description', content: 'A portfolio project showcasing the development of an interactive focus timer application built with React JS.' },
      { property: 'og:image', content: 'https://johannduque.com/img/flowspace-banner.png' },
      { property: 'og:type', content: 'website' },
    ],
  })

  return null
}