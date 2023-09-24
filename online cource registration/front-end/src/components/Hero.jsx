import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({tname,bname}) => {
    return (
        <>
            <section className="breadcrumb-area bg-default" style={{ backgroundImage: "url('assets/img/breadcrumb/breadcrumb-bg.jpg') "}}>
                <img src="assets/img/breadcrumb/shape-1.png" alt="" className="breadcrumb-shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-title">{tname}</h2>
                                <div className="breadcrumb-list">
                                    <Link to="/">Home</Link>
                                    <span>{bname}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
