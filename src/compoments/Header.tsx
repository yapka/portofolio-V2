import React from 'react';

const Header: React.FC = () => (
    <header className="navigation horizontal_header transparentOnScroll navbar navbar-expand-lg fixed-top">

        <div className="header-ins">
            <div className="container">

                <div className="site-logo">
                    <a href="#" className="hoveroff" title="">

                    Nathanael<span>K</span>
                    </a>
                </div>
                <button className="button-toggler navbar-toggler collapsed" type="button" data-target="#navigation" data-toggle="collapse" aria-controls="navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className="justify-content-end scrollspy collapse navbar-collapse" id="navigation">
                    <li>
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li>
                        <a href="#service" className="nav-link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#resume" className="nav-link">Resume</a>
                    </li>
                    <li>
                        <a href="#blog" className="nav-link">Blog</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>


            </div>
        </div>
    </header>
);

export default Header;
