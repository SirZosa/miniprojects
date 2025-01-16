import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [key, setKey] = useState("")

  function keyEvent(e){
    setKey({eventKey: e.key, eventKeyCode: e.keyCode, eventCode: e.code})
  }

  useEffect(() => {
    window.addEventListener('keypress', (e) => keyEvent(e))
  }, [])
  return (
    <>
      <div className="container">
        <div className="labels">
          <h4>Event.key</h4>
          <p>{key.eventKey}</p>
        </div>
        <div className="labels">
          <h4>Event.keyCode</h4>
          <p>{key.eventKeyCode}</p>
        </div>
        <div className="labels">
          <h4>Event.Code</h4>
          <p>{key.eventCode}</p>
        </div>
      </div>
    </>
  )
}

export default App
