import React, { useState, ChangeEvent, FormEvent } from 'react';
import MapboxMap from './MapboxMap';

// Définition de la structure des données du formulaire
interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    text: string;
}

const Contact: React.FC = () => {
    // État typé
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        text: ''
    });

    // Gestionnaire de changement générique
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Gestionnaire de soumission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Données envoyées :", formData);
        // Logique d'envoi API ici
    };

    return (
        <section className="contact" id="contact">
            <div className="container d-flex flex-column justify-content-between h-100">

                {/* Titre de la section */}
                <div className="section-title flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12 text-left">
                            <h2 data-aos="heading-show" className="text_background">
                                Contactez-moi
                                <span className="heading_background">Contact</span>
                            </h2>
                            <p className="m-0">N'hésitez pas à me contacter pour toute question ou collaboration.</p>
                        </div>
                    </div>
                </div>

                <div className="section-content flex-grow-1">
                    {/* Infos de contact */}
                    <div className="row">
                        {[
                            { icon: 'mbri-letter', title: 'Email', content: 'ton.email@exemple.com', link: 'mailto:ton.email@exemple.com' },
                            { icon: 'mbri-mobile', title: 'Téléphone', content: '+33 6 12 34 56 78', link: 'tel:+33612345678' },
                            { icon: 'mbri-map-pin', title: 'Adresse', content: 'Paris, France' }
                        ].map((info, idx) => (
                            <div className="col-sm-4" key={idx}>
                                <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                                    <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                                        <span className={info.icon}></span>
                                    </div>
                                    <div className="contact-details mt-2">
                                        <h5>{info.title}</h5>
                                        <p>{info.link ? <a href={info.link}>{info.content}</a> : info.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Formulaire */}
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit} id="contact-form">
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <div className="form-group">
                                            <input
                                                type="text" name="name" id="name" className="form-control"
                                                autoComplete="off" required
                                                value={formData.name} onChange={handleChange}
                                            />
                                            <label htmlFor="name">Nom</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <div className="form-group">
                                            <input
                                                type="email" name="email" id="email" className="form-control"
                                                autoComplete="off" required
                                                value={formData.email} onChange={handleChange}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <input
                                                type="text" name="subject" id="subject" className="form-control"
                                                autoComplete="off" required
                                                value={formData.subject} onChange={handleChange}
                                            />
                                            <label htmlFor="subject">Sujet</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <textarea
                                                name="text" id="text" rows={6} className="form-control"
                                                required value={formData.text} onChange={handleChange}
                                            ></textarea>
                                            <label htmlFor="text">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" id="contact-btn" className="btn btn-outline-primary btn-bg">
                                                Envoyer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            {/* Carte Mapbox */}
            <div className="row mt-5">
                <div className="col-12">
                    <MapboxMap />
                </div>
            </div>
        </section>
    );
};

export default Contact;
