import React from 'react';

const Testimonial: React.FC = () => (
    <div
        className="section testimonial background-section"
        style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}
    >
        <div className="container">
            <div className="row">
                <div id="client_slider" className="owl-carousel owl-theme">

                    {/* Testimonial 1 */}
                    <div className="col-12">
                        <div className="testimonial-box d-flex flex-column flex-md-row justify-content-between align-items-start p-5">
                            <div className="testimonial_icon mr-4">
                                <span className="mbri-quote-left"></span>
                            </div>
                            <div className="testimonial_content mt-3">
                                <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi</p>
                                <div className="testimonial_author row mt-3">
                                    <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                                        <div className="row">
                                            <div className="col-12 col-md-3">
                                                <div
                                                    className="author_picture mr-3"
                                                    style={{ backgroundImage: 'url(https://via.placeholder.com/70x70)' }}
                                                />
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <div className="author_info py-2">
                                                    <h3>Linzi Landry</h3>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="col-12">
                        <div className="testimonial-box d-flex flex-column flex-md-row justify-content-between align-items-start p-5">
                            <div className="testimonial_icon mr-4">
                                <span className="mbri-quote-left"></span>
                            </div>
                            <div className="testimonial_content mt-3">
                                <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi</p>
                                <div className="testimonial_author row mt-3">
                                    <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                                        <div className="row">
                                            <div className="col-12 col-md-3">
                                                <div
                                                    className="author_picture mr-3"
                                                    style={{ backgroundImage: 'url(https://via.placeholder.com/70x70)' }}
                                                />
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <div className="author_info py-2">
                                                    <h3>Ebony Phan</h3>
                                                    <p>Web Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="col-12">
                        <div className="testimonial-box d-flex flex-column flex-md-row justify-content-between align-items-start p-5">
                            <div className="testimonial_icon mr-4">
                                <span className="mbri-quote-left"></span>
                            </div>
                            <div className="testimonial_content mt-3">
                                <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi</p>
                                <div className="testimonial_author row mt-3">
                                    <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                                        <div className="row">
                                            <div className="col-12 col-md-3">
                                                <div
                                                    className="author_picture mr-3"
                                                    style={{ backgroundImage: 'url(https://via.placeholder.com/70x70)' }}
                                                />
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <div className="author_info py-2">
                                                    <h3>Mikaela Palmer</h3>
                                                    <p>CEO of Company</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default Testimonial;