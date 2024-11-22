import Nav from './nav';
import Hero from './hero';
import Projects from './projects'
import Testimonials from './testimonials'
import Products from './products'
import Footer from './footer'

const main = () => {
    return (
        <div className="bg-indigo-600">
            <Nav />
            <Hero />
            <Projects/>
            <Testimonials/>
            <Products/>
            <Footer/>
        </div>
    );
};

export default main;
