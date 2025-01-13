import { useState, useRef, useEffect} from 'react'
import { CiSquareMinus, CiSquarePlus, CiMedicalCross } from "react-icons/ci";


import './App.css'

function App() {
  const [size, setSize] = useState(10)
  const [color, setColor] = useState('black')
  const [pressed, setPressed] = useState(false)
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)
  const canvas = useRef(null)

  function smallerSize(){
    if(size===5){
      return
    }
    else{
      setSize(prev => prev-5)
    }
  }
  function increaseSize(){
    if(size===50){
      return
    }
    else{
      setSize(prev=> prev+5)
    }
  }

  function newColor(e){
    setColor(e.target.value)
  }

  function paintCanvas(e){
    setPressed(true)
    setX(e.nativeEvent.offsetX)
    setY(e.nativeEvent.offsetY)
  }

  function mouseMoving(e){
    if(pressed){
      const x2 = e.nativeEvent.offsetX
      const y2 = e.nativeEvent.offsetY

      drawCircle(x2, y2)
      drawLine(x, y, x2, y2)

      setX(x2)
      setY(y2)
    }
  }

  function drawCircle(x, y){
    canvas.current.getContext('2d').beginPath()
    canvas.current.getContext('2d').arc(x, y, size, 0, Math.PI*2)
    canvas.current.getContext('2d').fillStyle = color
    canvas.current.getContext('2d').fill()
  }

  function drawLine(x1, y1, x2, y2){
    canvas.current.getContext('2d').beginPath()
    canvas.current.getContext('2d').moveTo(x1, y1)
    canvas.current.getContext('2d').lineTo(x2, y2)
    canvas.current.getContext('2d').strokeStyle = color
    canvas.current.getContext('2d').lineWidth = size * 2
    canvas.current.getContext('2d').stroke()
  }

  function clearCanvas(){
    canvas.current.getContext('2d').clearRect(0,0, 600, 600)
  }

  return (
    <>
    <canvas className='canvas' ref={canvas} width='600'  height='600' onMouseDown={(e) => paintCanvas(e)} onMouseMove={(e)=> mouseMoving(e)} onMouseUp={()=> setPressed(false)} onClick={(e) => drawCircle(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}></canvas>
    <div className="tool-box">
      <div className="pen-size">
        <button className="minus" onClick={()=> smallerSize()}><CiSquareMinus/></button>
        <p className="size">{size}</p>
        <button className='add' onClick={()=> increaseSize()}><CiSquarePlus/></button>
        <input className='color' type="color" onChange={(e) => newColor(e)}/>
      </div>
      <button className="clear" onClick={()=> clearCanvas()}><CiMedicalCross/></button>
    </div>
    </>
  )
}

export default App
