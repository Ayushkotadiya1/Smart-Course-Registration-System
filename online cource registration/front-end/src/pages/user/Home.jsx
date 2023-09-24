import React from 'react'
import Card from '../../components/Card'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
        <main>
        <section className="h3_banner-area">
                <div className="h3_single-banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 col-md-12">
                                <div className="h3_banner-content">
                                    <div className="section-area-3 mb-45 ">
                                        <span className="section-subtitle">🏆 The Leader in Online Learning</span>
                                        <h1 className="section-title">Choose <span>3400+</span> Online
                                            <span>Video</span> Courses With New
                                            Additions.</h1>
                                        <p className="section-text">Through a combination of lectures, readings, and discussions, students.</p>
                                    </div>
                                    <form action="#" className="h3_banner-form">
                                        <div className="h3_banner-form-item">
                                            <div className="h3_banner-form-item-search">
                                                <i className="fa-regular fa-magnifying-glass"></i>
                                                <input type="text" placeholder="Search Course"/>
                                            </div>
                                        </div>
                                        <div className="h3_banner-form-item">
                                            <div className="h3_banner-category">
                                                <a href="#"><i className="fa-solid fa-grid"></i><span>Category</span><i className="fa-light fa-angle-down"></i></a>
                                                <ul className="h3_banner-category-submenu">
                                                    <li><a href="#">Design</a></li>
                                                    <li><a href="#">Development</a></li>
                                                    <li><a href="#">Marketing</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="h3_banner-form-item">
                                            <button type="submit" className="theme-btn theme-btn-medium theme-btn-3 h3_banner-form-btn">Search</button>
                                        </div>
                                    </form>
                                    <img className="h3_banner-content-shape-1" src="assets/img/banner/3/shape-1.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 d-none d-lg-block">
                                <div className="h3_banner-right">
                                    <div className="h3_banner-img">
                                        <img src="assets/img/banner/3/banner-img.png" alt=""/>
                                    </div>
                                    <div className="h3_banner-right-shape">
                                        <div className="inner-shpae-1">
                                            <img className="h3_banner-shape-2" src="assets/img/banner/3/shape-2.png" alt=""/>
                                        </div>
                                        <img className="h3_banner-shape-1" src="assets/img/banner/3/shape-3.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h3_course-area pt-135 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-area-3 text-center mb-40">
                                <span className="section-subtitle">Top Popular Courses</span>
                                <h2 className="section-title mb-0">Explore Featured Courses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="h3_course-tab mb-40">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                        See All
                                      </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Trending</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Featured</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="pills-four-tab" data-bs-toggle="pill" data-bs-target="#pills-four" type="button" role="tab" aria-controls="pills-four" aria-selected="false">Web Design</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="pills-five-tab" data-bs-toggle="pill" data-bs-target="#pills-five" type="button" role="tab" aria-controls="pills-five" aria-selected="false">Popular</button>
                                    </li>
                                </ul>                                      
                            </div>
                        </div>
                    </div>
                    <div className="h3_course-wrap">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row">
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                               <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/1.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/2.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">Studying Principles of Educational Organizational.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/3.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/1.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/2.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">Studying Principles of Educational Organizational.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/3.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-four" role="tabpanel" aria-labelledby="pills-four-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/1.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/2.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">Studying Principles of Educational Organizational.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/3.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-five" role="tabpanel" aria-labelledby="pills-five-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/1.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Leadership</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>42 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>64 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">A Comprehensive Overview of The Field of Education.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$120</del>$96.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Widget</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(46)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/2.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Marketing</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>35 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>45 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>23 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">Studying Principles of Educational Organizational.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$124</del>$99.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Russell</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(24)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="h3_course-item mb-30">
                                            <div className="h3_course-item-top">
                                                <div className="h3_course-item-img">
                                                    <a href="course-details.html"><img src="assets/img/course/3/3.jpg" alt=""/></a>
                                                    <div className="h3_course-item-tag">
                                                        <a href="#">Education</a>
                                                    </div>
                                                    <div className="h3_course-item-save">
                                                        <a href="#"><i className="fa-light fa-bookmark"></i></a>
                                                    </div>
                                                </div>
                                                <div className="h3_course-content">
                                                    <div className="h3_course-content-info">
                                                        <ul>
                                                            <li><i className="fa-light fa-book-blank"></i>26 Lessons</li>
                                                            <li><i className="fa-light fa-user-group"></i>48 Students</li>
                                                            <li><i className="fa-light fa-clock"></i>20 Hours</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="h3_course-content-title"><a href="course-details.html">Examining Strategies to Promote Inclusivity and Diversity.</a></h5>
                                                    <div className="h3_course-content-price">
                                                        <span><del>$138</del>$85.00</span>
                                                        <h5>Free</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h3_course-item-bottom">
                                                <div className="h3_course-item-author">
                                                    <div className="h3_course-item-author-img">
                                                        <img src="assets/img/course/3/author-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="h3_course-item-author-info">
                                                        <span>By <a href="#">Ameter</a></span>
                                                    </div>
                                                </div>
                                                <div className="h3_course-item-rating">
                                                    <ul>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <span>(36)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Home
