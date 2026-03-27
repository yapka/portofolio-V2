import React from 'react';

const Footer: React.FC = () => (
    <footer className="horizontal-footer shadow-footer">
        {/* ...contenu footer ici... */}
        
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-12">
                        <div className="text-center">
                            <ul className="social-icons list-inline mt-5">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-pinterest-p"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-git"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-tumblr"></i>
                                    </a>
                                </li>
                            </ul>
                        <p className="copyright-text mt-3 mb-5">{new Date().getFullYear()} ©  Nathanael KOUAKOU - Tous droits réservés </p>
                        </div>
                    </div>
                </div>
            </div>



        
    </footer>
);

export default Footer;
