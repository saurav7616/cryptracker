import React from "react";
import CoinCard from "../coinCard/CoinCard";

const CardArr = ({ rec }) => {
    return(
        <div className="overflow-y-scroll" style={{height:"70vh"}}>
            {
                rec.map((ele,i) => <CoinCard key={i} id={i+1} data={ rec[i] }/>)
            }
        </div>
        
    );
    
}

export default CardArr;