import { useContext } from "react"
import { CardContext } from "../../context/CardContext"
import arrow_icon from "../../assets/arrow.svg"


export default function SearchBar() {
  const { input, setInput, searchCard, flag } = useContext(CardContext)

  function handleChange(e) {
    // console.log(e.target.value)
    console.log(flag)
    let value = e.target.value
    setInput(value)
    searchCard(value.toLowerCase())
  }
  // console.log('Input: ', input)

  return (
    <div className="search-container">
      <input className="search-bar" onChange={handleChange} type="search" name="search" placeholder="Search" value={input} />
      <img className="arrow-icon" src={arrow_icon} alt="arrow icon" />
      {flag ? <div className="no-search">No search results</div>: <></>}
    </div>
  )
}
