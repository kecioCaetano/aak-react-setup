import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Gallery from './Gallery.jsx'
import Animals from './Animals.jsx'
import Color from './Color.jsx'
import Gallery2 from './Gallery2.jsx'
import Name from './Name.jsx'
import FeedbackForm from './FeedbackForm.jsx'
// import Greeting from './Greeting.jsx'
import Accordion from './Accordion.jsx'
import SyncedInputs from './SyncedInputs.jsx'
import FilterableList from './FilterableList.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Animals /> */}
    {/* <App/> */}
    {/* <Color/> */}
    {/* <Gallery2/>
    <Gallery2/> */}
    {/* <Name/> */}
    {/* <FeedbackForm/> */}
    {/* <Accordion /> */}
    {/* <SyncedInputs /> */}
    <FilterableList />
  </StrictMode>,
)
