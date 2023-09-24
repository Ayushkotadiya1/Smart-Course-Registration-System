import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header> 
            <div className="h3_header-area header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-sm-7 col-6">
                            <div className="h3_header-logo">
                                <Link to="/"><img src="assets/img/logo/logo.png" alt="img"/></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="h3_header-middle">
                                <nav className="h3_main-menu mobile-menu" id="mobile-menu">
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/course">Courses</Link>
                                        </li>
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-5 col-6">
                            <div className="h3_header-right">
                                <div className="h3_header-btn d-none d-sm-block">
                                    <Link to="/signup" className="header-btn theme-btn theme-btn-medium theme-btn-3">Sign Up Now<i className="fa-light fa-arrow-up-right"></i></Link>
                                </div>
                                <div className="header-menu-bar d-xl-none ml-10">
                                    <span className="header-menu-bar-icon side-toggle">
                                        <i className="fa-light fa-bars"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Navbar
