import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FrontImg from "../assets/Front.jpg"
import Destination from "../components/Destination.jsx"
import Footer from "../components/Footer.jsx"

function Home () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                ccName="hero-text"
                heroImg = {FrontImg}
                title="Welcome to the First Baptist Church of Licking"
                buttonText="Follow us on Facebook"
                url="https://www.facebook.com/profile.php?id=100069495064670"
                btnClass="show"
            />
            <Destination/>
            <Footer/>
        </>
    )
}

export default Home;