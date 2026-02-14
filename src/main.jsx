import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import TodoList from './DateTest.jsx'
import AnimalList from './AnimalList.jsx'
import AppAnimal from './props.jsx'
import ListPeople from './people.jsx'
import AppButtonFunc from './propsFunctions.jsx'
import Gallery from './gallery.jsx'
import Clock from './clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
  </StrictMode>,
)
