import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Signup = () => {
    return (
        <>
        <Navbar/>
            <main>
                <Hero tname={'Sign Up'} bname={'Sign Up'} />
                <div className="account-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8 col-md-10">
                                <div className="account-wrap">
                                    <div className="account-top sign-up">
                                        <div className="account-top-current">
                                            <span>Sign Up</span>
                                        </div>
                                        <div className="account-top-link">
                                            <Link to="/login">Login</Link>
                                        </div>
                                    </div>
                                    <div className="account-main">
                                        <h3 className="account-title">Create Your Account 👋</h3>
                                        <form action="#" className="account-form">
                                            <div className="account-form-item mb-20">
                                                <div className="account-form-label">
                                                    <label>First Name</label>
                                                </div>
                                                <div className="account-form-input">
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="account-form-item mb-20">
                                                <div className="account-form-label">
                                                    <label>Last Name</label>
                                                </div>
                                                <div className="account-form-input">
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
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
                                                <button type="submit" className="account-btn">Sign Up</button>
                                            </div>
                                        </form>
                                        <div className="account-bottom">
                                            <div className="account-bottom-text">
                                                <p>Already have an account ?  <Link to="/login">Login for here</Link></p>
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

export default Signup
