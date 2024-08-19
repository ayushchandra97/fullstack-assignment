import { createContext, useState, useEffect } from "react"
import { useErrorBoundary } from "react-error-boundary"
import PropTypes from "prop-types"

export const CardContext = createContext(null)

function CardContextProvider({ children }) {

    const { showBoundary } = useErrorBoundary()

    // If no cards in the database, sample cards will be displayed.
    const sampleCards = [
        {
            title: "Branches",
            description: "Abstract Branches lets you manage, version, and document your designs in one place."
        },
        {
            title: "Manage your account",
            description: "Configure your account settings, such as your email, profile details, and password."
        },
        {
            title: "Manage organizations, teams, and projects",
            description: "Use Abstract organizations, teams, and projects to organize your people and your work."
        },
        {
            title: "Manage billing",
            description: "Change subscriptions and payment details."
        },
        {
            title: "Authenticate to Abstract",
            description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning."
        },
        {
            title: "Abstract support",
            description: "Get in touch with a human."
        },
    ]

    const [cards, setCards] = useState([])
    const [searchedCards, setSearchedCards] = useState([])
    const [input, setInput] = useState("")
    const [flag, setFlag] = useState(false)

    async function fetchCards() {
        try {
            const res = await fetch("http://localhost:8000/cards")
            const resData = await res.json()
            if (!res.ok) {
                throw new Error(`${res.status} : ${resData.message}`)
            }
            if (resData.data.length === 0) {
                setCards(sampleCards)
            } else {
                setCards(resData.data)
            }
        } catch (error) {
            showBoundary(error)
            console.error(error)
        }
    }


    function searchCard(searchTerm) {
        const foundCards = []

        for (const card of cards) {
            if (card.title.toLowerCase().includes(searchTerm) || card.description.toLowerCase().includes(searchTerm)) {
                foundCards.push(card)
            }
        }
        if (foundCards.length > 0) {
            setSearchedCards(foundCards)
            setFlag(false)
            
        } else if (foundCards.length === 0 && input !== "") {
            setSearchedCards([])
            setFlag(true)
        } else {
            setSearchedCards([])
            setFlag(false)

        }
    }


    useEffect(() => {
        fetchCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const contextValue = { cards, searchCard, searchedCards, input, setInput, flag }


    return (
        <CardContext.Provider value={contextValue}>
            {children}
        </CardContext.Provider>
    )
}

CardContextProvider.propTypes = {
    children: PropTypes.any
}

export default CardContextProvider