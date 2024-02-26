import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FrontImg from "../assets/Contact.jpg"
import Footer from "../components/Footer.jsx"
import ContactForm from "../components/Contact.jsx"


function Contact () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-top"
                ccName="hero-text1"
                heroImg = {FrontImg}
                title=""
                btnClass="hide"
            />
            <ContactForm />
            <Footer/>
        </>
    )
}

export default Contact;