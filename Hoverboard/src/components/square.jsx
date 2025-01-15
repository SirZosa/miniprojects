import { useState } from "react";

export default function Square(){
    const [boxColor, setBoxColor] = useState({backgroundColor: '#1d1d1d',boxShadow:'0 0 2px #000'})
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
    function mouseOver(){
        const color = getColor()
        setBoxColor({backgroundColor:color, boxShadow:`0 0 2px ${color}, 0 0 10px ${color}`})
    }
    function getColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }
    function removeColor(){
        setBoxColor({backgroundColor: '#1d1d1d',boxShadow:'0 0 2px #000'})
    }
    return(
        <div className='square' style={{background:boxColor.backgroundColor, boxShadow:boxColor.boxShadow}} onMouseOver={()=> mouseOver()} onMouseLeave={() => removeColor()}></div>
    )
}