import React from 'react'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Course = () => {
    return (
        <>
        <Navbar/>
            <main>
                <Hero tname={'Course Archive'} bname={'Course'}/>
                <section className="innerPage_course-area pt-120 pb-90">
                    <div className="container">
                        <div className="innerPage_course-top mb-30">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-4">
                                    <div className="innerPage_course-left mb-20">
                                        <p>Showing 1-8 of 24 results</p>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-md-8">
                                    <div className="innerPage_course-right mb-20">
                                        <div className="innerPage_course-search">
                                            <form action="#">
                                                <input type="text" placeholder="Search Item" />
                                                <button type="submit" className="innerPage_course-search-btn"><i className="fa-thin fa-magnifying-glass"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="pagination-area mt-20 mb-30">
                                    <ul>
                                        <li><Link to="#">01</Link></li>
                                        <li><Link to="#">02</Link></li>
                                        <li><Link to="#">03</Link></li>
                                        <li><Link to="#">04</Link></li>
                                        <li><Link to="#"><i className="fa-light fa-angle-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Course
