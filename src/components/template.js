import React from "react";
import "../css/trailer.css"
// import golderSpoon from "../images/trailer/golden-spoon.jpeg"
// import businessProposal from "../images/trailer/business-proposal.webp"
// import startUp from "../images/trailer/start-up.jpg"
// import vincenso from "../images/trailer/vincenso.webp"


function Template(props){
    return(
        <div className="trailer">
            <h1 className="MainTitle">{props.dataItems.title}</h1>
            <div className="container">
                <img src={`./trailer/${props.dataItems.poster1}`} alt="mainImage" className="mainImage"/>
                <img src={`./trailer/${props.dataItems.poster2}`} alt="mainImage" className="mainImage"/>
                <img src={`./trailer/${props.dataItems.poster3}`} alt="mainImage" className="mainImage"/>
                <img src={`./trailer/${props.dataItems.poster4}`} alt="mainImage" className="mainImage"/>
               
            </div>
        </div>

    )
}

export default Template;