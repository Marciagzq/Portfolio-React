import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Home Route */}
            <Link className="navbar-brand" to="/">
                MARCIA<span id="lastName">ZEGARRA</span>
            </Link>

            <div  className="collapse navbar-collapse" id="navbarNav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
                <ul className="navbar-nav">
                    {/* home Route */}
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
                        </Link>
                    </li>

                    {/* About Route */}
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className={window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
                        </Link>
                    </li>

                    {/* Portfolio Route */}
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={window.location.pathname === "/portfolio"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            Portfolio
                        </Link>
                    </li>

                    {/* Technology Route */}
                    <li className="nav-item">
                        <Link
                            to="/technology"
                            className={window.location.pathname === "/technology"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            Technology
                        </Link>
                    </li>

                    {/* Contact me Route */}
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={window.location.pathname === "/contact"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                        <button type="button" className="btn">Warning</button>
                        </Link>
                    </li>


                </ul>
            </div>
        </nav>
    );
}

export default Navbar;