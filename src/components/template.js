import React from "react";
import "../css/trailer.css"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
import Slider from "react-slick";


function Template(props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  
    return(
        <div className="trailer">
            <h2 className="MainTitle">{props.dataItems.title}</h2>
            <div className="container">
                <img src={`${props.dataItems.poster1}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster2}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster3}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster4}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster5}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster6}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster7}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster8}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster9}`} alt="mainImage" className="mainImage"/>
                <img src={`${props.dataItems.poster10}`} alt="mainImage" className="mainImage"/> 
            </div>
        </div>

    )
}

export default Template;