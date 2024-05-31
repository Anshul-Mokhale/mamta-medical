import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo-no-background.png";
import "../css/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";

function Navbar() {
    const [username, setUsername] = useState('');
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            setUsername(user.name);
        } else {
            setUsername('');
        }
    }, [user]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                document.body.classList.add('darks');
            } else {
                document.body.classList.remove('darks');
            }
        };

        // Initial check
        if (mediaQuery.matches) {
            document.body.classList.add('darks');
        } else {
            document.body.classList.remove('darks');
        }

        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const location = useLocation();
    return (
        <div>
            <div className="Navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="Navbar-links">
                    <li><NavLink to="/" className={location.pathname === '/' ? 'activete' : ''}>Home</NavLink></li>
                    <li><NavLink to="/about" className={location.pathname === '/about' ? 'activete' : ''}>About</NavLink></li>
                    <li><NavLink to="/contact" className={location.pathname === '/contact' ? 'activete' : ''}>Contact</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                </div>
                {!user && (
                    <div className="Navbar-buttons">

                        <li><NavLink to="/user/signin">Login</NavLink></li>
                        <li><NavLink to="/user/signup">Signup</NavLink></li>
                    </div>

                )}
                {user && (
                    <div className="Navbar-buttons" id='userbox'>
                        <li><NavLink to="/dashboard">{username}</NavLink></li>
                    </div>
                )}
                <div className="menu-button">
                    <button
                        className="butuu"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <img src={logo} alt="logo" />
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <div className="inner-offcanvas-body">
                        <li><NavLink to="/" className={location.pathname === '/' ? 'activete' : ''}>Home</NavLink></li>
                        <li><NavLink to="/about" className={location.pathname === '/about' ? 'activete' : ''}>About</NavLink></li>
                        <li><NavLink to="/contact" className={location.pathname === '/contact' ? 'activete' : ''}>Contact</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        {!user && (
                            <>
                                <li><NavLink to="/user/signin" className="login-butn">Login</NavLink></li>
                                <li><NavLink to="/user/signup" className="login-butn">Signup</NavLink></li>
                            </>
                        )}
                        {user && (
                            <li><NavLink to="/dashboard" className="login-butn">{username}</NavLink></li>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
