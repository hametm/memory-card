import React, { useState, useEffect } from "react";

const Scoreboard = (props) => {


    return (
        <div id="scoreboard">
            <h2>Score: {props.score}</h2>
            <h2>Top Score: {props.bestScore}</h2>
        </div>
    );
}

export default Scoreboard;