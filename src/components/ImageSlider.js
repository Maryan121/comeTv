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
        // if(currentIndex === slides.length - 1){
            
            // setCurrentIndex()
        // }        
        // setCurrentIndex(currentIndex + 1)

    },3000)
 return(
    <div className="cont">
       <img  src={slides[currentIndex].url}  className="backgroundimage"/>
        <div className="sliders">
            <FaChevronLeft onClick={goPrevious}  className="leftArrow sliderArrows"/>                
            <FaChevronRight onClick={goNext}  className="rightArrow sliderArrows"/>
        </div>
    </div>
 )
} 



 // const sliderStyles = {
    //     height:"100%",
    //     position:"relative"
    // }
    // const slideStyles = {
    //     width:"100%",
    //     height:"100%",
    //     backgroundImage:`url(${slides[currentIndex].url})`,
    //     backgroundSize:"cover",
    //     backgroundPosition:"center",
    //     margin: "0 auto"

    // }
 {/* </div> */}
        {/* {console.log(slides[currentIndex].url)} */}
{/* style={sliderStyles} */}
        {/* <div style={slideStyles}></div> */}
        {/* <div className="bgcont"> */}