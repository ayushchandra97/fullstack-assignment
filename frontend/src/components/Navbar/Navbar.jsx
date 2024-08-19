import "./navbar.css"

export default function Navbar() {
    return (
        <header className="main-header">
            <nav className="nav-bar">
                <div className="nav-list">
                    <h4>Abstract</h4>
                    <span>|</span>
                    <ul>
                        <li>Help Center</li>
                    </ul>
                </div>
                <button type="button">Submit a request</button>
            </nav>
        </header>
    )
}
