import SundayImg from "../assets/SundaySchool.jpg";
import SundayImg1 from "../assets/SundayWorship.jpg";
import SundayImg2 from "../assets/childrenChurch.jpg";
import SundayImg3 from "../assets/BibleStudy.jpg";
import SundayImg4 from "../assets/PrayerTime.png";
import SundayImg5 from "../assets/kidsClub.jpg";
import SundayImg6 from "../assets/Triumph.jpg";
import DestinationData2 from "./DestinationData2.jsx";
import "./DestinationStyles.css"


const Destination2 = () => {
    return(
        <div className="destination">
            <h1>Tuesday</h1>
            <p></p>
            <DestinationData2
            className="first-des"
            heading="Prayer Time @8am"
            text="Prayer time at our church is a sacred moment where we come together as a community to deepen our connection with God through devotion and fellowship. It's a time dedicated to spiritual growth and renewal, where we engage in meaningful discussions centered around Scripture and personal reflection. Through shared prayers and heartfelt conversations, we uplift one another, offering support and encouragement in our faith journeys. Together, we seek God's guidance, find solace in His presence, and strengthen the bonds of our community. Prayer time is not only an opportunity to commune with God but also to connect with one another on a deeper level, fostering a sense of unity and love that transcends individual differences."
            img1={SundayImg4}
            />
            

            <br></br>
            <br></br>
            <br></br>
            <h1>Wednesday</h1>
            <p></p>
            <DestinationData2
            className="first-des-reverse"
            heading="Kid's Klub @6:00-7:30pm"
            text="'Kids Klub' is an exciting and enriching program designed specifically for children, where they can embark on a journey of discovery, learning, and fun within a nurturing and supportive environment. Through engaging activities, interactive lessons, and creative play, Kids Klub provides a vibrant platform for children to explore their faith, develop important life skills, and build meaningful relationships with their peers. Under the guidance of dedicated leaders and volunteers, children are encouraged to express themselves, ask questions, and deepen their understanding of biblical teachings in a way that is both age-appropriate and inspiring. Whether through dynamic storytelling, hands-on crafts, or spirited games, Kids Klub fosters a sense of belonging and excitement, igniting a lifelong love for learning and a strong foundation for spiritual growth."
            img1={SundayImg5}
            />
            <DestinationData2
            className="first-des-reverse"
            heading="Triumph Youth Group @Triumph Sports Complex (6:30-8:00pm)"
            text="'Triumph' youth group is a dynamic and empowering community hosted at Triumph Sports Complex, where teenagers come together to grow in faith, friendship, and purpose. Led by the dedicated Youth Pastor Cole Roark, Triumph offers a vibrant space for young people to explore their spirituality, engage in meaningful discussions, and develop leadership skills that will empower them to navigate life's challenges with confidence and resilience. Through exciting events, impactful service projects, and authentic connections with peers and mentors, Triumph inspires teenagers to discover their unique gifts, embrace their identity in Christ, and embark on a journey of transformation and triumph in every aspect of their lives."
            img1={SundayImg6}
            />
            
            <br></br>
            <br></br>
            <br></br>
            <h1>Thursday</h1>
            <p></p>
            <DestinationData2
            className="first-des"
            heading="Prayer Time @8am"
            text="Prayer time at our church is a sacred moment where we come together as a community to deepen our connection with God through devotion and fellowship. It's a time dedicated to spiritual growth and renewal, where we engage in meaningful discussions centered around Scripture and personal reflection. Through shared prayers and heartfelt conversations, we uplift one another, offering support and encouragement in our faith journeys. Together, we seek God's guidance, find solace in His presence, and strengthen the bonds of our community. Prayer time is not only an opportunity to commune with God but also to connect with one another on a deeper level, fostering a sense of unity and love that transcends individual differences."
            img1={SundayImg4}
            />


            <br></br>
            <br></br>
            <br></br>
            <h1>Sunday</h1>
            <p></p>
            
            <DestinationData2
            className="first-des"
            heading="Sunday School @10am"
            text=" It's a fantastic opportunity for both of you to deepen your understanding of the Bible, develop meaningful relationships within our supportive community, and cultivate essential life skills like empathy and leadership. Our engaging lessons and fun activities make learning about God an enjoyable experience for all ages. We'd be honored to have both you and your child be a part of our Sunday School family!"
            img1={SundayImg}
            />
            <DestinationData2
            className="first-des-reverse"
            heading="Worship @11am"
            text="It's a special time where we come together as a community to praise God, find inspiration for our daily lives, and strengthen our bonds with one another. Attending Sunday worship offers a sense of belonging, opportunities for personal growth, and the chance to create lasting family memories rooted in faith. We would be honored to have you join us as we journey together in worship and spiritual growth."
            img1={SundayImg1}
            />

            <DestinationData2
            className="first-des-reverse"
            heading="Children's Church @11am"
            text="If you're between the ages of 3 to 4th grade, you're invited to join us for Children's Church during our Sunday worship service! It's a special time just for kids like you, where we have fun learning about God through stories, songs, and activities that are perfect for your age group. You'll get to make new friends, explore your faith, and have a blast while doing it. So come on over and join us – we can't wait to see you there!"
            img1={SundayImg2}
            />

            <DestinationData2
            className="first-des"
            heading="Evening Bible Study @5pm"
            text="Good evening! I wanted to let you know about our evening Bible study, led by none other than Pastor Rob himself. It's a fantastic opportunity for adults of all ages to come together, delve deeper into the teachings of the Bible, and engage in meaningful discussions about how to apply those teachings to our everyday lives. Pastor Rob brings a wealth of knowledge and insight to the study, and his leadership ensures that each session is both enlightening and enriching. Whether you're a seasoned Bible scholar or just beginning your spiritual journey, you're sure to find inspiration and fellowship in our evening Bible study with Pastor Rob. We'd love to have you join us!"
            img1={SundayImg3}
            />
        </div>
    )
}

export default Destination2;