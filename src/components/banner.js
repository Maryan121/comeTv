import React from "react";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa"
import "../css/banner.css"
import { useState } from "react";
import ImageSlider from "./ImageSlider"

function Banner(){
    const images = [
        
        {url: "bannerimages/true-beauty.jpg"},
        {url: "bannerimages/start-up.jpeg"},
        {url: "bannerimages/dr-cha.webp"},
        {url: "bannerimages/batman.jpg"},
        {url: "bannerimages/pushba.jpg"},       
        {url: "bannerimages/tale-of-the-nine-tailed.jpg"},
        {url: "bannerimages/ghayal.jpg"},
        {url: "bannerimages/revenge-of-others.webp"},
    ]
 
    return(
        <div className="background">
            <div className="containerStyles">
                <ImageSlider slides={images}/>
            </div>

            {/* <div className="sliders">
                <FaChevronLeft  className="leftArrow sliderArrows"/>                
                <FaChevronRight  className="rightArrow sliderArrows"/>

            </div> */}
        </div>
    )
}

export default Banner;