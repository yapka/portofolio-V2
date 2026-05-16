import React from 'react';

const Project: React.FC = () => (
    <section className="resume background_gpattern" id="resume">

        <div className="container d-flex flex-column justify-content-between h-100 ">

            <div className="section-title flex-grow-1">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-left">
                            <h2 data-aos="heading-show" className="text_background">
                                My Experience
                                <span className="heading_background">Resume</span>
                            </h2>
                            <p className="m-0">If you are going to use a passage of Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-content flex-grow-1">
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <h3 className="mb-4">Education</h3>
                        <ul className="list-inline resume-list">
                            <li>
                                {/* Fixed typo: University */}
                                <h4 className="mb-2">University of Boston, Computer Science</h4>
                                <span className="time">2010 - 2016</span>
                                <p className="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                            </li>
                            <li>
                                <h4 className="mb-2">Master Computer Science</h4>
                                <span className="time">2016 - 2018</span>
                                <p className="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6">
                        <h3 className="mb-4">Experience</h3>
                        <ul className="list-inline resume-list">
                            <li>
                                <h4 className="mb-2">UI/UX Designer</h4>
                                <span className="time">2010 - 2016</span>
                                <p className="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                            </li>
                            <li>
                                <h4 className="mb-2">Web Developer</h4>
                                <span className="time">2016 - 2018</span>
                                <p className="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5">
                    {/* JavaScript */}
                    <div className="col-lg-6">
                        <div className="skill d-flex flex-row pr-4 pr-sm-3 px-3 mb-4">
                            <div className="skill-progress flex-grow-1">
                                <div className="progresss-info d-flex flex-row justify-content-between mt-2 mb-1">
                                    <span>JavaScript</span>
                                    <span className="text-right progress-percent">75%</span>
                                </div>
                                <div className="progress">
                                    {/* Added style attribute for visual width filling */}
                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} data-percent="75" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WordPress */}
                    <div className="col-lg-6">
                        <div className="skill d-flex flex-row pr-4 pr-sm-3 px-3 mb-4">
                            <div className="skill-progress flex-grow-1">
                                <div className="progresss-info d-flex flex-row justify-content-between mt-2 mb-1">
                                    <span>WordPress</span>
                                    <span className="text-right progress-percent">90%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} data-percent="90" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HTML 5 */}
                    <div className="col-lg-6">
                        <div className="skill d-flex flex-row pr-4 pr-sm-3 px-3 mb-4">
                            <div className="skill-progress flex-grow-1">
                                <div className="progresss-info d-flex flex-row justify-content-between mt-2 mb-1">
                                    <span>HTML 5</span>
                                    <span className="text-right progress-percent">95%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '95%' }} data-percent="95" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CSS 3 */}
                    <div className="col-lg-6">
                        <div className="skill d-flex flex-row pr-4 pr-sm-3 px-3 mb-4">
                            <div className="skill-progress flex-grow-1">
                                <div className="progresss-info d-flex flex-row justify-content-between mt-2 mb-1">
                                    <span>CSS 3</span>
                                    <span className="text-right progress-percent">85%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '85%' }} data-percent="85" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </section>
);

export default Project;