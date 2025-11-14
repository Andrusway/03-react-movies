import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Started...</h1>
    <p>Wait for more informations...</p>
  </StrictMode>,
)
