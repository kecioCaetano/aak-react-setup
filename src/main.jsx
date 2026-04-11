import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Gallery from './Gallery.jsx'
import Animals from './Animals.jsx'
// import Greeting from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Animals /> */}
    <App/>
  </StrictMode>,
)
