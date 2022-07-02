import React, { useState, useEffect } from "react";

const Scoreboard = (props) => {


    return (
        <div>
            Score: {props.score}
        </div>
    );
}

export default Scoreboard;