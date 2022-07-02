import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";

const Card = (props) => {

    return (
        <div id="cardContainer">
            <img className="card" src={props.src} onClick={() => props.onCardClick(props.name)} alt="rice" />
        </div>
    );


}

export default Card;
