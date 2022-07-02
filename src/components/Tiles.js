import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";

const Tiles = (props) => {
    const [tally1, setTally1] = useState(0);
    const [tally2, setTally2] = useState(0);
    const [tally3, setTally3] = useState(0);
    const [mark1, setMark1] = useState(false);
    const [mark2, setMark2] = useState(false);
    const [mark3, setMark3] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (tally1 === 2) {
            setMark1(true);
            setScore(0);
        }
    }, [tally1]);

    useEffect(() => {
        if (tally2 === 2) {
            setMark2(true);
            setScore(0);
        }
    }, [tally2]);

    useEffect(() => {
        if (tally3 === 2) {
            setMark3(true);
            setScore(0);
        }
    }, [tally3]);

    useEffect(() => {
        if (score === 0) {
            setTally1(0);
            setTally2(0);
            setTally3(0);
            setMark1(false);
            setMark2(false);
            setMark3(false);
        }
    }, [score])

    const onTile1Clicked = () => {
        setTally1(tally1 + 1);
        setScore(score + 1);
    }

    const onTile2Clicked = () => {
        setTally2(tally2 + 1);
        setScore(score + 1);
    }

    const onTile3Clicked = () => {
        setTally3(tally3 + 1);
        setScore(score + 1);
    }

   return (
    <div>
        <Scoreboard score={score}/>
        <button onClick={onTile1Clicked}>Tile1</button>
        <button onClick={onTile2Clicked}>Tile2</button>
        <button onClick={onTile3Clicked}>Tile3</button>
    </div>
   );
}

export default Tiles;