import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UnheadProvider } from '@unhead/react/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UnheadProvider>
      <App />
    </UnheadProvider>
  </StrictMode>,
)
