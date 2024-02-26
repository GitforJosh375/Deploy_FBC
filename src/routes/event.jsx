import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FrontImg from "../assets/Cross.jpg"
import Footer from "../components/Footer.jsx"
import Destination2 from "../components/Destination2.jsx"


function Event () {
    return(
        <>  
            <Navbar />
            <Hero 
                cName="hero-mid"
                ccName="hero-text1"
                heroImg = {FrontImg}
                title="Events"
                btnClass="hide"
            />
            <Destination2/>
            <Footer/>
        </>
    )
}

export default Event;