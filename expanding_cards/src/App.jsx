import './App.css'
import React from 'react'
import Card from './components/card'
function App() {
  const [activeCard, setActiveCard] = React.useState(0)

  const imagesUrls = [
    {
      url:'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text:'Explore The World'
    },
    {
      url:'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text:'Wild Forest'
    },
    {
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      text:'Sunny Beach'
    },
    {
      url:'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      text:'City on Winter'
    },
    {
      url:'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      text:'Mountains - Clouds'
    }
  ]

  function handleClick(index){
    setActiveCard(index)
  }

  const pics = imagesUrls.map((url, index) => {
    return(
      <Card url={url.url} key={index} isActive={index === activeCard} onClick={()=> handleClick(index)} text={url.text}/>
    )
  })
  
  return (
    <div className="container">
      {pics}
    </div>
  )
}

export default App
