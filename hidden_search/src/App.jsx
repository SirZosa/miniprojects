import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [search, setSearch] = useState(input)
  const pStyle = search ? 'block' : 'none'

  function changeSearch(e){
    if(e.keyCode == 13){
      setSearch(input)
      e.target.value = ""
    }
  }
  function changeInput(e){
    setInput(e.target.value)
  }
  return (
    <>
    <SearchBar changeInput={changeInput} changeSearch={changeSearch}/>
    <p style={{display: `${pStyle}`}}>{`Your search: ${search}`}</p>
    </>
  )
}

export default App
