import { useContext } from "react"
import Card from "../Card/Card"
import { CardContext } from "../../context/CardContext"
import "./cardarea.css"


export default function CardArea() {

  const { cards, searchedCards, flag } = useContext(CardContext)
  // console.log('Search cards in card area: ', searchedCards)

  return (
    <>
      {!flag && <div className="card-grid">
        {searchedCards.length > 0 ? searchedCards.map((card, index) => {
          return (
            <Card key={index} title={card.title} description={card.description} />
          )
        })
          : cards.map((card, index) => {
            return (
              <Card key={index} title={card.title} description={card.description} />
            )
          })}
      </div>}
    </>
  )
}
