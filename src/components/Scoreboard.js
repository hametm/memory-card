import React, { useState, useEffect } from "react";

const Scoreboard = (props) => {


    return (
        <div>
            Score: {props.score}
            Best Score: {props.bestScore}
        </div>
    );
}

export default Scoreboard;