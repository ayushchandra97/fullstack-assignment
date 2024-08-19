import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-list">
                <h3>Abstract</h3>
                <ul>
                    <li><a target="_blank" href="#">Branches</a></li>
                </ul>
            </div>

            <div className="footer-list">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Release Notes</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
            </div>

            <div className="footer-list">
                <h3>Community</h3>
                <ul>
                    <li><a target="_blank" href="https://x.com">Twitter</a></li>
                    <li><a target="_blank" href="https://linkedin.com">LinkedIn</a></li>
                    <li><a target="_blank" href="https://facebook.com">Facebook</a></li>
                    <li><a target="_blank" href="https://dribbble.com">Dribbble</a></li>
                    <li><a href="#">Podcast</a></li>
                </ul>
            </div>

            <div className="footer-list">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Legal</a></li>
                </ul>
                <div className="footer-list">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="#">info@abstract.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-copy">
                <h3>Abstract</h3>
                <p>&copy; Copyright 2022</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
            </div>

        </footer>
    )
}
