import PropTypes from "prop-types"
import "./fallbackui.css"

export default function FallbackUI({ error, resetErrorBoundary }) {
    return (
        <main>
            <div className="error-boundary">
                <h1>{error.message}</h1>
                <button onClick={resetErrorBoundary}>Retry</button>
            </div>
        </main>
    )
}

FallbackUI.propTypes = {
    error: PropTypes.any,
    resetErrorBoundary: PropTypes.any
}

