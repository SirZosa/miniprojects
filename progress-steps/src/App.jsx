import { useState } from 'react'
import './App.css'
import ProgressBar from './components/progressbar'
import Button from './components/button'

function App() {
  const [active, setActive] = useState(1)
  const [steps, setSteps] = useState(5)

  function prev(){
    if(active === 1){
      return
    }
    else{
      setActive(prev => prev-1)
    }
  }


  function next(){
    if(active === steps){
      return
    }
    else{

      setActive(prev => prev+1)
    }
  }

  return (
    <>
    <div className="container">
      <ProgressBar steps={steps} active={active}/>
      <Button onClick={()=>prev()}>Prev</Button>
      <Button onClick={() => next()}>Next</Button>
    </div>
      
    </>
  )
}

export default App
