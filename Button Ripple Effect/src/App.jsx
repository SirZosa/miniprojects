import { useState } from 'react'
import './App.css'

function App() {
  const [hasSpan, setHasSpan] = useState(false)
  const [coordinates, setCoordinates] = useState({x:0, y:0})
  function handleClick(e){
    setCoordinates({x:e.pageX- e.target.offsetLeft, y:e.pageY-e.target.offsetTop})
    setHasSpan(true)
    setTimeout(()=> setHasSpan(false), 500)
  }

  return (
    <>
      <button className="btn" onClick={(e) => handleClick(e)}>CLICK ME{hasSpan && <span className="circle" style={{top:coordinates.y + 'px', left:coordinates.x + 'px'}}></span>}</button>
    </>
  )
}

export default App
