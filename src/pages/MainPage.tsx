import React from 'react';
import Header from '../compoments/Header';
import About from '../compoments/About';
import Services from '../compoments/Services';
import Portfolio from '../compoments/Portfolio';
import Resume from '../compoments/Resume';
import Blog from '../compoments/Blog';
import Contact from '../compoments/Contact';
import Footer from '../compoments/Footer';
import Facts from '../compoments/Facts';
import Testimonial from '../compoments/Testimonial';
import Project from '../compoments/Project';


const MainPage: React.FC = () => (
    <>
        
        <Header />
        <About />
        <Facts />
        <Services />
        <Project />
        <Portfolio />
        <Resume />
        <Testimonial />
        <Blog />
        <Contact />
        <Footer />
    </>
);

export default MainPage;
