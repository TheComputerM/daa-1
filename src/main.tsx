import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import '@fontsource-variable/outfit';
import './index.css'
import App from './App.tsx'

// biome-ignore lint/style/noNonNullAssertion: breh
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
