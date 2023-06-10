import React from "react";
import "../css/trailer.css"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";



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
            <div className="a">
               <h2 className="MainTitle">{props.dataItems.title}</h2>
                <Link to="/series" className="MainTitle seeAll">see all</Link> 
            </div>
            
            <div className="container">
                <Link to="/watch"><img src={`${props.dataItems.poster1}`} alt="mainImage" className="mainImage"/></Link>
                <Link to="/watch"><img src={`${props.dataItems.poster2}`} alt="mainImage" className="mainImage"/></Link>
                <Link to="/watch"><img src={`${props.dataItems.poster3}`} alt="mainImage" className="mainImage"/></Link>
                <Link to="/watch"><img src={`${props.dataItems.poster4}`} alt="mainImage" className="mainImage"/></Link>
            </div>
        </div>

    )
}

export default Template;