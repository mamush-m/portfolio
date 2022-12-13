import React from "react";
import './home.css';
// import binary from '../../resources/videos/Binary_Code.mp4';
import binary1 from '../../resources/videos/trimmed.mp4';
import { About } from "../about/About";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div id="homeBody">
            <div id="binary">
                <video src={binary1} loop autoPlay></video>
            </div>
            
            <h2>Welcome to my Page!</h2>

            <div id="me">
                <h3>...</h3>
                <p>I'm a full stack software engineer and would love to connect with you. If you would like to know more about my interests/services, head over to my <Link to='/about'>About</Link> page or check out my <Link to='/portfolio'>Portfolio</Link>. If you would like to get in touch, head over to my <Link to='/contact'>Contact</Link> page. Thank you!</p>
            </div>
        </div>
    )
}