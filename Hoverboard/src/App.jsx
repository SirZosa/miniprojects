import { useState } from 'react'
import './App.css'
import Square from './components/square'

function App() {
const squares = () => {
  const squares = []
  for(let i=0; i< 500; i++){
    squares.push(<Square key={i}/>)
  }
  return squares
}
  return (
    <>
    <div className="container">
      {squares()}
    </div>
    </>
  )
}

export default App
