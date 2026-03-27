import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        // Typed.js init (si tu l'utilises)
        const typed = new (window as any).Typed(".welcome-text-type", {
            strings: [
                "Géomaticien",
                "Analyste de données spatiales",
                "Chercheur en épidémiologie spatiale",
            ],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home d-flex" id="home">
            {/* Background */}
            <div className="mono-background">
                <div
                    className="mono-background-inner"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-delay="450"
                >
                    <img
                        src="/src/assets/images/photo_5794360995336621224_y.jpg"
                        className="img-align-center"
                        alt="Geospatial background"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container introduction text-left">
                {/* Type animation */}
                <p
                    className="welcome_text mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="150"
                >
                    Je suis <span className="welcome-text-type"></span>
                </p>

                {/* Name */}
                <div
                    id="parallax-scene"
                    className="mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                >
                    <div className="heading-zone">
                        <h1>M'Me Nathanaël</h1>
                    </div>
                </div>

                {/* Scientific positioning */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="450"
                >
                    <p style={{ maxWidth: "600px" }}>
                        I use geospatial technologies, data analysis and modeling to
                        understand environmental and health dynamics in urban areas.
                        My work focuses on spatial risk mapping, data-driven decision
                        support and the study of vector-borne diseases such as malaria
                        and dengue.
                    </p>
                </div>

                {/* Buttons */}
                <div
                    className="mt-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                >
                    <a href="#portfolio" className="btn btn-primary btn-small me-3">
                        View My Projects
                    </a>

                    <a href="#blog" className="btn btn-outline-primary btn-small">
                        Read My Articles
                    </a>
                </div>
            </div>

            {/* Scroll */}
            <div className="scroll-down">
                <a href="#about" className="scroll-down-link text-center hoveroff">
                    <div className="scroll-title">Scroll Down</div>
                    <div className="scroll-mouse">
                        <div className="whell"></div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Home;