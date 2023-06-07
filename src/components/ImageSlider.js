import React from "react";
import { useState } from "react";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa"
import "../css/banner.css"



export default function ImageSlider({slides}){
    const[currentIndex,setCurrentIndex] = useState(0)
   
    function goPrevious(){
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    function goNext(){
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    setTimeout(function(){
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    },3000)
 return(
    <div className="cont">
        <img  src={`${slides[currentIndex].url}`} alt="background"  className="backgroundimage"/>
        {/* {console.log(`./trailer/${slides[currentIndex].url}`)} */}
        <div className="sliders">
            <FaChevronLeft onClick={goPrevious}  className="leftArrow sliderArrows"/>                
            <FaChevronRight onClick={goNext}  className="rightArrow sliderArrows"/>
        </div>
    </div>
 )
} 


