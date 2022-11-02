import React from 'react';


const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top p-2">
            <div className="container">
                <a className="navbar-brand fw-bold px-2 border-end border-2" href="#root">

                    Anchit Chandran
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="true"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className={`nav-link`} aria-current="page" href="#Header" >Me</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link `} href="#Projects">
                                Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link`} href="#Skills" >Skills</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link`} href="#Education" >Education</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link `} href="#Contact" >Contact me</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

        
    )
}

export default Navbar;