import React from "react";
import "../css/series.css"
import { Link } from "react-router-dom";

export default function SeriesTemplate(props){
  

    return(
        <Link to="/watch" className="templateCont">
            {/* C:\Users\HP\Desktop\react-related\movie-app\public\seriesImages */}
            <img src={`${props.dataItems.coverImage}`} alt="seriesImages" />
            <div className="desc" >
                <p className="seriesTitle">{props.dataItems.title} ({props.dataItems.year})</p>
                <button className="seriesBtn"> {props.dataItems.episodes} ep</button>
            </div>
        </Link>
    )
}