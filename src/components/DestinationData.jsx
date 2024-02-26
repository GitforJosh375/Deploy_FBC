import SundayImg from "../assets/SundaySchool.jpg";
import SundayImg1 from "../assets/SundaySchool.jpg";
import SundayImg2 from "../assets/SundaySchool.jpg";
import SundayImg3 from "../assets/SundaySchool.jpg";
import { Component } from "react";

import "./DestinationStyles.css";

class DestinationData2 extends Component {
    render(){
        return (
            <div className={this.props.className}> 
                <div className ="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                </div>
            </div>
        )
    }
}

export default DestinationData2;