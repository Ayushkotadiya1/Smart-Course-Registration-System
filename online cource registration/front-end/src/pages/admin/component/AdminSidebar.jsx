import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <>
            <header className='shadow mb-5'>
                <div className="h3_header-area header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-sm-7 col-6">
                                <div className="h3_header-logo">
                                    <Link to="/admin"><img src="assets/img/logo.png" alt="img" className='h-50 w-50'/></Link>
                                </div>
                            </div>
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="h3_header-middle">
                                    <nav className="h3_main-menu mobile-menu" id="mobile-menu">
                                        <ul>
                                            <li>
                                                <Link to="/admin">Dashboard</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/course">Courses</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-5 col-6">
                                <div className="h3_header-right">
                                    <div className="h3_header-btn d-none d-sm-block">
                                        <Link to="/" className="header-btn theme-btn theme-btn-medium theme-btn-3">Log out<i className="fa-light fa-arrow-up-right"></i></Link>
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
        </>
    )
}

export default AdminSidebar;
