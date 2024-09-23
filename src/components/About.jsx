import "./AboutStyles.css"
import ChurchLetter from "../assets/ChurchLetter.png";

function AboutUs () {
    return(
        <div className="about-container">
            <div className="mission-text">
            <h1>Our Story</h1>
            <p>
                On October 23, 1879 the First Baptist Church of Licking was organized. The Rev. James S. Rice, nephew of the famed Luther Rice, was called to be the first pastor. From that time unto the present we at First Baptist have enjoyed being a diverse group of people who have been supernaturally tranformed for the 
                special purpose of exalting and lifting up the name of jesus. We believe that we have been changed to establish Christ's church as a place to find comfort, strength, and direction. The body of Christ is commanded by God to bear one another's burdens (Galatians: 6:1-2). If you are strong, we need you. If you are weak, then you need us.
            </p>
            <p>
                Together we are working to become the church we believe Jesus wants us to be, where there's relevant teaching, heart-felt worship, honest friendships, constant prayer, and compassionate care for each other. In short, we'd like to have the kind of contagious Christianity that can influence and encourage the entire community, one life at a time.
                Our objectives are simply to teach and preach the BIble, to encourage Christian growth in an atmosphere of love, to care for people in a personal way, and to introduce our community to the person of Jesus Christ, as we seek to build a caring supportive Christian fellowship. 
            </p>
            
            <h1>Leadership</h1>
            <ul>
                <li><strong>Pastor:</strong>
                    <ul>
                        <li>Rob Lilly</li>
                    </ul>
                </li>
                <li><strong>Youth Pastor:</strong>
                    <ul>
                        <li>Cole Roark</li>
                    </ul>
                </li>
                <li><strong>Music Director:</strong>
                    <ul>
                        <li>Beth Chilton</li>
                    </ul>
                </li>
                <li><strong>Sound and Visual Producer:</strong>
                    <ul>
                        <li>Tim Umfleet</li>
                        <li>Ashley Umfleet</li>
                    </ul>
                </li>
                <li><strong>Administrative Assistant:</strong> 
                    <ul>
                        <li>Chrissy Medlock</li>
                    </ul>
                </li>
                <li><strong>Chairman of Deacons:</strong> 
                    <ul>
                        <li>Barry Reynolds</li>
                    </ul>
                </li>
                <li><strong>Deacons:</strong>
                    <ul>
                        <li>Bryant Chilton</li>
                        <li>Wayne Hackman</li>
                        <li>John Hood</li>
                        <li>Brian Friend</li>
                        <li>David Roberts</li>
                    </ul>
                </li>
            </ul>
            </div>
            <div className="mission-img">
            <img className="pic" alt="img" src={ChurchLetter}/>
            </div>
            
        </div>

    )
}

export default AboutUs