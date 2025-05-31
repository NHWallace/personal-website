import React from "react";
import "../styles/background.css";
import bgVideo from "../assets/background.mp4";
import fallbackImage from "../assets/background.png"

const Background = () => {
    return(
        <>
            <div className="shadow-overlay"></div>
            <video playsInLine autoPlay muted loop preload="auto" id="bg"
                   poster={fallbackImage}>
                <source src={bgVideo} type="video/mp4" />
            </video>
        </>
    )
}

export default Background