// import { useState } from 'react'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function Button({text = 'Click me', color = 'blue', fontSize=12, handleClick}){
  const buttonStyle = {
    color,
    fontSize: fontSize + 'px'
  }
  return(
    <button onClick={handleClick} style={buttonStyle}>{text}</button>
  )
}

function ListItem(props){
  return (
    <li>{props.animal}</li>
  )
}

function List(props){
  return(
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return animal.startsWith('L') && <li key={animal}>{animal}</li>
            // return <ListItem key={animal} animal={animal} />
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && <div>There are no animals in this list!</div>}
    </>
  )
}

function App() {

  const animals = ['Lion', 'Cow', 'Snake', 'Lizard']

  return (
    <div>
      <h1>Animals:</h1>
      <List animals={animals}/>
    </div>
  )

  // const handButtonClick = (url) => {
  //   window.location.href = url
  // }

  //  return (
  //     <div>
  //       <Button handleClick={() => handButtonClick('https://www.google.com')}/>
  //       <Button text="Don't lick me" color="red"/>
  //       <Button fontSize={20}/>
  //     </div>
  // ) 
}

export default App
