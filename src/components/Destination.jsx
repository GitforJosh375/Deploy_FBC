import SundayImg from "../assets/SundaySchool.jpg";
import SundayImg1 from "../assets/SundayWorship.jpg";
import SundayImg2 from "../assets/childrenChurch.jpg";
import SundayImg3 from "../assets/BibleStudy.jpg";
import SundayImg4 from "../assets/PatternsMovie.jpg";
import SundayImg5 from "../assets/MarkCal.jpg";
import Movie from "../assets/Break.jpg";
import DestinationData from "./DestinationData.jsx";
import OctoberImg from "../assets/October_festival.jpg"
import "./DestinationStyles.css"


const Destination = () => {
    return(
        <div className="destination">
            {/*
            <h1>Featured Events</h1>
            <p></p> 
            

            <DestinationData
            className="first-des"
            heading="October 12: Community Fall Festival"
            text="Bring Your Family And Friends <br />Free Food <br />Train Rides <br />Face Painting <br />Inflatable Slide <br />Fall Games & Activities "
            img1={OctoberImg}
            />
            */}
            {/*
            <DestinationData
            className="first-des-reverse"
            heading="April 28: Movie Night - Break Every Chain"
            text="A true account of how God forever changed the life of a police officer who was battling alcoholism, depression, and devastating loss."
            img1={Movie}
            />
            */}
            
            


            {/*<br></br>
            <br></br>
            <br></br>*/}
            <h1>Sunday Events</h1>
            <p></p>
            
            <DestinationData
            className="first-des"
            heading="Sunday School @10am"
            text=" It's a fantastic opportunity for both of you to deepen your understanding of the Bible, develop meaningful relationships within our supportive community, and cultivate essential life skills like empathy and leadership. Our engaging lessons and fun activities make learning about God an enjoyable experience for all ages. We'd be honored to have both you and your child be a part of our Sunday School family!"
            img1={SundayImg}
            />
            <DestinationData
            className="first-des-reverse"
            heading="Worship @11am"
            text="It's a special time where we come together as a community to praise God, find inspiration for our daily lives, and strengthen our bonds with one another. Attending Sunday worship offers a sense of belonging, opportunities for personal growth, and the chance to create lasting family memories rooted in faith. We would be honored to have you join us as we journey together in worship and spiritual growth."
            img1={SundayImg1}
            />

            <DestinationData
            className="first-des-reverse"
            heading="Children's Church @11am"
            text="If you're between the ages of 3 to fourth grade, you're invited to join us for Children's Church during our Sunday worship service! It's a special time just for kids like you, where we have fun learning about God through stories, songs, and activities that are perfect for your age group. You'll get to make new friends, explore your faith, and have a blast while doing it. So come on over and join us – we can't wait to see you there!"
            img1={SundayImg2}
            />

            <DestinationData
            className="first-des"
            heading="Evening Bible Study @5pm"
            text="Evening Bible study is a fantastic opportunity for adults of all ages to come together, delve deeper into the teachings of the Bible, and engage in meaningful discussions about how to apply those teachings to our everyday lives.  Pastor Rob brings a wealth of knowledge and insight to the study, and his leadership ensures that each session is both enlightening and enriching.  Whether you're a seasoned Bible scholar or just beginning your spiritual journey, you're sure to find inspiration and fellowship.  We'd love to have you join us!"
            img1={SundayImg3}
            />
        </div>
    )
}

export default Destination;