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
    const [secretScore, setSecretScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        if (bestScore <= score) {
            setBestScore(score);
        }
        if (secretScore > score) {
            setBestScore(secretScore);
        }
    }, [score]);

    useEffect(() => {
        if (tally1 === 2) {
            setMark1(true);
            setSecretScore(score);
            setScore(0);
        }
    }, [tally1]);

    useEffect(() => {
        if (tally2 === 2) {
            setMark2(true);
            setSecretScore(score);
            setScore(0);
        }
    }, [tally2]);

    useEffect(() => {
        if (tally3 === 2) {
            setMark3(true);
            setSecretScore(score);
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
        if (tally1 === 1) {
            setScore(score);
        } else {
            setScore(score + 1);
        }
        setTally1(tally1 + 1);
    }

    const onTile2Clicked = () => {
        if (tally2 === 1) {
            setScore(score);
        } else {
            setScore(score + 1);
        }
        setTally2(tally2 + 1);
    }

    const onTile3Clicked = () => {
        if (tally3 === 1) {
            setScore(score);
        } else {
            setScore(score + 1);
        }
        setTally3(tally3 + 1);
    }

    // const displayRandomOrder = () => {
    //     const tile1 = <button onClick={onTile1Clicked}>Tile1</button>
    //     const tile2 = <button onClick={onTile2Clicked}>Tile2</button>
    //     const tile3 = <button onClick={onTile3Clicked}>Tile3</button>
    //     let randomNumberArray = [0, 1, 2];
    //     let randomNumber = Math.floor(Math.random() * 3 + 1);
        
    //     let tileArray = [tile1, tile2, tile3]
    //     tileArray[0].indexOf() = randomNumber;
        

    // }

   return (
    <div>
        <Scoreboard score={score} bestScore={bestScore}/>
        <button onClick={onTile1Clicked}>Tile1</button>
        <button onClick={onTile2Clicked}>Tile2</button>
        <button onClick={onTile3Clicked}>Tile3</button>
    </div>
   );
}

export default Tiles;