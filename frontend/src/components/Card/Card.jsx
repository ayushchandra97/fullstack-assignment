import PropTypes from "prop-types"
import "./card.css"

export default function Card( { title, description } ) {
    return (
        <>
            <div className="card">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}