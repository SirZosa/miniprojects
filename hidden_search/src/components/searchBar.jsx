import { useState, useRef, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import classNames from "classnames"
export default function SearchBar({changeInput, changeSearch}){
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (active) {
          inputRef.current.focus();
        }
      }, [active])

    const searchClass = active ? classNames("search-container", "active") : "search-container"
    const inputRef = useRef(null)

    function toggle(){
        setActive(prev => !prev)
    }

    return(
        <div className={searchClass}>
            <input type="text" className="input" placeholder="Search..." ref={inputRef} onChange={(e) => changeInput(e)} onKeyDown={(e) => changeSearch(e)}/>
            <button className="search-button" onClick={()=> toggle()}><FaSearch/></button>
        </div>
    )
}