import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";

const Card = (props) => {

    return (
        <button onClick={() => props.onBtnClick(props.name)}>{props.name}</button>
    );


}

export default Card;
