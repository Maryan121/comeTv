import React from "react";
import "../css/series.css"

export default function SeriesTemplate(props){
    return(
        <div className="templateCont">
            {/* C:\Users\HP\Desktop\react-related\movie-app\public\seriesImages */}
            <img src={`${props.dataItems.coverImage}`} alt="seriesImages" />
            <div className="desc" >
                <p className="seriesTitle">{props.dataItems.title} ({props.dataItems.year})</p>
                <button className="seriesBtn"> {props.dataItems.episodes} ep</button>
            </div>
        </div>
    )
}