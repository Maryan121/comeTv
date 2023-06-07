import React from "react";
import "../css/banner.css"
import ImageSlider from "./ImageSlider"
import bg1 from "../bannerimages/true-beauty.jpg"
import bg2 from "../bannerimages/start-up.jpeg"
import bg3 from "../bannerimages/batman.jpg"
import bg4 from "../bannerimages/dr-cha.webp"
import bg5 from "../bannerimages/pushba.jpg"
import bg6 from "../bannerimages/tale-of-the-nine-tailed.jpg"
import bg7 from "../bannerimages/revenge-of-others.webp"

function Banner(){
    const images = [
        {url: bg1, title: "true-beauty"},
        {url: bg2, title: "start-up"},
        {url: bg3, title: "batman"},
        {url: bg4 , title: "dr-cha"},
        {url: bg5, title: "pushba"},       
        {url: bg6, title: "tale-of-the-nine-tailed"},
        {url: bg7, title: "revenge-of-others"},
        
    ]
 
    return(
        <div className="background">
            <div className="containerStyles">
                <ImageSlider slides={images} />
            </div>
        </div>
    )
}

export default Banner;