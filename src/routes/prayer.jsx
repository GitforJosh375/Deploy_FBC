import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FrontImg from "../assets/PrayerRequest.jpg"
import Footer from "../components/Footer.jsx"
import PrayerReq from "../components/Prayer.jsx"


function Event () {
    return(
        <>  
            <Navbar />
            <Hero 
                cName="hero-mid"
                ccName="hero-text1"
                heroImg = {FrontImg}
                title=""
                btnClass="hide"
            />
            <PrayerReq/>
            <Footer/>
        </>
    )
}

export default Event;