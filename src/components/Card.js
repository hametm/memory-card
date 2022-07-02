import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";

const Card = (props) => {

    return (
        <div id="cardContainer">
            <img className="card" 
                src={props.src} 
                onClick={() => props.onCardClick(props.name)} 
                alt={props.alt} 
                // key={props.key} 
            />
            <h3>{props.name}</h3>
        </div>
    );


}

export default Card;
