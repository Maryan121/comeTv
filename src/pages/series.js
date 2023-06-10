import React from "react";
import seriesData from "../data/seriesData";
import SeriesTemplate from "../components/seriestemplate";
import "../css/series.css"


export function SeriesPage(){
    const data = seriesData.map((data)=>{
        return   <SeriesTemplate 
            key={data.id}
            dataItems = {data} 
        />

    })
    return(
        <main className="main">
        <div className="containerSer">
            {data}
        </div>  
      

        </main>
       
    )
} 