import React from 'react';
import avatar from '../assets/avatar.png';

const Footer = () => {
    return (
        <>
            <nav className="navbar is-danger is-fixed-bottom" role="navigation" aria-label="main navigation">

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <img src={avatar} height="30px" width="50px" />
                        <div className="navbar-item">Made with</div>
                        <div className="navbar-item"><i className="fas fa-heart"></i></div>
                        <div className="navbar-item">and</div>
                        <div className="navbar-item"><i className="fab fa-react"></i></div>
                        <div className="navbar-item">by ISF</div>
                    </div>
                </div>

                <div className="nav-menu">
                    <div className="navbar-end">
                        <div className="navbar-item"><i className="fas fa-mobile-alt"></i></div>
                        <div className="navbar-item">+1-484-222-9045</div>
                        <div className="navbar-item"><i className="far fa-envelope"></i></div>
                        <div className="navbar-item">dmjohnspor@gmail.com</div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Footer
