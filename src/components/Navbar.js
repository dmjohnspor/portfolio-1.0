import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../assets/logo_512x512.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar is-danger is-fixed-top">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://github.com/dmjohnspor" target="_blank">
                        <img src={logo} alt="ISF logo" />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <p style={{ color: "white" }}>Home</p>
                            </Link>
                        </div>


                        <div className="navbar-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <p style={{ color: "white" }}>About Me</p>
                            </Link>
                        </div>

                        <div className="navbar-item">
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <p style={{ color: "white" }}>Portfolio</p>
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a target="_blank" href="https://github.com/dmjohnspor">
                                        <button type="button" className="button is-inverted is-danger">
                                            <span className="icon"><i className="fab fa-github"></i></span>
                                            <span>Github</span>
                                        </button>
                                    </a>
                                </p>
                                <p className="control">
                                    <a target="_blank" href="https://www.linkedin.com/in/ioannis-sporidis-foster/">
                                        <button type="button" className="button is-inverted is-danger">
                                            <span className="icon"><i className="fab fa-linkedin"></i></span>
                                            <span>LinkedIn</span>
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar
