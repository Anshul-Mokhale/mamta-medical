import { Link } from "react-router-dom"
import "../css/footer.css"
import logo from "../assets/logo/logo-no-background.png"

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer-part">
                <div className="footer-top">

                    <div className="footer-one">
                        <img src={logo} alt="logo" />
                        <p>At Mamta Medical, we value the trust you place in us. From our user-friendly interface to our dedicated customer support, we're committed to providing you with the best possible pharmacy experience. </p>
                    </div>
                    <div className="footer-two">
                        <h1>Menu</h1>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="">Shop</Link></li>
                    </div>
                    <div className="footer-three">
                        <h1>Leagel</h1>
                        <li><Link to="">Terms and Conditions</Link></li>
                        <li><Link to="">Terms of Services</Link></li>
                        <li><Link to="">Privacy Policy</Link></li>
                        <li><Link to="">Refund Policy</Link></li>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>All rights reserved &copy; {currentYear} Mamta Medical</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer
