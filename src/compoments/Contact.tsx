import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

// Define structure for form state
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    // 1. Initialize form state
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // 2. Handle input changes dynamically
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // 3. Handle form submission
    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        // Process form data here (e.g., API call)
        console.log('Form Submitted successfully:', formData);
    };

    return ( // Fixed: Added explicitly required return statement
        <section className="contact" id="contact">
            <div className="container d-flex flex-column justify-content-between h-100 ">
                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-left">
                                <h2 data-aos="heading-show" className="text_background">
                                    Get in Touch
                                    <span className="heading_background">Contact Us</span>
                                </h2>
                                <p className="m-0">It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-content flex-grow-1">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                                <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                                    <span className="mbri-letter"></span>
                                </div>
                                <div className="contact-details mt-2">
                                    <h5>Email Us</h5>
                                    <p><a href="mailto:kevinmiller@alb.com">kevinmiller@alb.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                                <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                                    <span className="mbri-mobile"></span>
                                </div>
                                <div className="contact-details mt-2">
                                    <h5>Call</h5>
                                    <p><a href="tel:+1000123456789">+1 xxx-888-7887</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                                <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                                    <span className="mbri-map-pin"></span>
                                </div>
                                <div className="contact-details mt-2">
                                    <h5>Visit</h5>
                                    <p>New York, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit} id="contact-form">
                                <div className="row">
                                    {/* Name Input */}
                                    <div className="col-lg-6 mt-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                autoComplete="off"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="name">Full Name</label>
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div className="col-lg-6 mt-3">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                autoComplete="off"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>

                                    {/* Subject Input */}
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                className="form-control"
                                                autoComplete="off"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>

                                    {/* Message Textarea */}
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                id="text"
                                                rows={6}
                                                className="form-control"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                            <label htmlFor="text">Message</label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" id="contact-btn" className="btn btn-outline-primary btn-bg">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;