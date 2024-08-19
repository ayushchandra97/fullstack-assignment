import SearchBar from "./SearchBar"
import "./search.css"

export default function Search() {
  return (
    <>
      <section className="main-section">
        <div>
          <h1 className="main-heading">How can we help?</h1>
          <SearchBar />
        </div>
      </section>
    </>
  )
}
