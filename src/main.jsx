import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Footer} from './components/footer/Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
)
