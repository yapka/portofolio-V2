import React from 'react';


const Facts: React.FC = () => (
    <div
        className="section facts backgound-section"
        id="facts"
        style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}
        data-aos-id="facts"
    >
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                    <div className="fact-single text-center">
                        <div className="fact-icon">
                            <span className="mbri-timer"></span>
                        </div>
                        <div className="fact-info">
                            <span className="tmcounter" data-from="0" data-to="20" data-speed="1500">20</span>+
                        </div>
                        <div className="fact-meta">
                            <span>Years Experiance</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                    <div className="fact-single text-center">
                        <div className="fact-icon">
                            <span className="mbri-smile-face"></span>
                        </div>
                        <div className="fact-info">
                            <span className="tmcounter" data-from="0" data-to="400" data-speed="1500">400</span>+
                        </div>
                        <div className="fact-meta">
                            <span>Happy Clients</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                    <div className="fact-single text-center">
                        <div className="fact-icon">
                            <span className="mbri-magic-stick"></span>
                        </div>
                        <div className="fact-info">
                            <span className="tmcounter" data-from="0" data-to="7853" data-speed="1500">7853</span>
                        </div>
                        <div className="fact-meta">
                            <span>Projects Done</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                    <div className="fact-single text-center">
                        <div className="fact-icon">
                            <span className="mbri-save"></span>
                        </div>
                        <div className="fact-info">
                            <span className="tmcounter" data-from="0" data-to="2569" data-speed="1500">2569</span>
                        </div>
                        <div className="fact-meta">
                            <span>Download</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Facts;
