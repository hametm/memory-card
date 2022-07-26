import React from "react";

const Scoreboard = (props) => {

    return (
        <div id="scoreboard">
            <h2>Your Score: {props.score}</h2>
            <h2>Personal Best: {props.bestScore}</h2>
        </div>
    );
}

export default Scoreboard;