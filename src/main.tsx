import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Config/Styles/index.css'
import Router from './Config/Routes/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router/>
  </StrictMode>,
)
