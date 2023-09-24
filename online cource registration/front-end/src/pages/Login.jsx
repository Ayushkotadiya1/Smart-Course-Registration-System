import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <>
        <Navbar/>
            <main>
                <Hero tname={'Login'} bname={'Login'}/>
                <div className="account-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8 col-md-10">
                                <div className="account-wrap">
                                    <div className="account-top">
                                        <div className="account-top-link">
                                            <Link to="/signup">Sign Up</Link>
                                        </div>
                                        <div className="account-top-current">
                                            <span>Login</span>
                                        </div>
                                    </div>
                                    <div className="account-main">
                                        <h3 className="account-title">Login to Your Account 👋</h3>
                                        <form action="#" className="account-form">
                                            <div className="account-form-item mb-20">
                                                <div className="account-form-label">
                                                    <label>Your Email</label>
                                                </div>
                                                <div className="account-form-input">
                                                    <input type="email" placeholder="Enter Your Email" />
                                                </div>
                                            </div>
                                            <div className="account-form-item mb-15">
                                                <div className="account-form-label">
                                                    <label>Your Password</label>
                                                    <Link to="#">Forgot Password ?</Link>
                                                </div>
                                                <div className="account-form-input account-form-input-pass">
                                                    <input type="text" placeholder="*********" />
                                                    <span><i className="fa-thin fa-eye"></i></span>
                                                </div>
                                            </div>
                                            <div className="account-form-condition">
                                                <label className="condition_label">Remember Me
                                                    <input type="checkbox" />
                                                    <span className="check_mark"></span>
                                                </label>
                                            </div>
                                            <div className="account-form-button">
                                                <button type="submit" className="account-btn">Login</button>
                                            </div>
                                        </form>
                                        <div className="account-bottom">
                                            <div className="account-bottom-text">
                                                <p>Don’t have an account ?  <Link to="/signup">Sign Up for free</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Login
