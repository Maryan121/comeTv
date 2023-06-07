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
        {/* <h2 className="mainTitle">series</h2> */}
         <div className="containerSer">
            {data}
        </div>  
        <div className="trending">
            <h3>trending</h3>
            <ul>
                <li>* crezy love</li>
                <li>* crezy love</li>
                <li>* crezy love</li>
                <li>* crezy love</li>
                <li>* crezy love</li>
                <li>* crezy love</li>
                <li>* crezy love</li>
                <li>* crezy love</li>
            </ul>
        </div>     

        </main>
       
    )
} 