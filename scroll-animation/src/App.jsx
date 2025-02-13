import { useState, useEffect } from 'react'
import classNames from 'classnames'
import './App.css'
import Cards from './components/card'

function App() {

  const [YPosition, setYPosition] = useState(window.innerHeight)
  
  window.addEventListener('scroll', changeWindow)
  function changeWindow(){
    setYPosition(window.innerHeight + window.scrollY)
    console.log(window.innerHeight)
  }

  const boxes =() => {
    const boxArr = []
    for(let i= 0; i<13; i++){
      boxArr.push(<Cards key={i} YPosition={YPosition} i={i}/>)
    }
    return boxArr
  }
  
  
  
  return (
    <>
      <h1>Scroll to see the animation</h1>
      {boxes()}
    </>
  )
}

export default App
