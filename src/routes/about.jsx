import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FrontImg from "../assets/cup.jpg"
import Footer from "../components/Footer.jsx"
import AboutUs from "../components/About.jsx"


function About () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                ccName="hero-text1"
                heroImg = {FrontImg}
                title="About"
                btnClass="hide"
            />
            <AboutUs />
            <Footer/>
        </>
    )
}

export default About;