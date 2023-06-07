import trailerData from "../data/trailerData";
import Template from "./template";

function TrailerContainer(){
    let data = trailerData.map((data)=>{
        return<Template 
            key= {data.id} 
            dataItems = {data}
        />
    })
    return(
        <div>
            {data}
        </div>
    );
}

export default TrailerContainer;