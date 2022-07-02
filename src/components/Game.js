import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Card from "./Card";
import "../styles/style.css";
import conAir from "../images/con-air.png";
import itCouldHappen from "../images/it-could-happen-to-you.png";
import momAndDad from "../images/mom-and-dad.png";
import moonstruck from "../images/moonstruck.png";
import nationalTreasure from "../images/national-treasure.png";
import pig from "../images/pig.png";
import wickerMan from "../images/the-wicker-man.png";
import vampiresKiss from "../images/vampires-kiss.png";


const Game = (props) => {
    const [score, setScore] = useState(0);
    const [secretScore, setSecretScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const onCardClick = (name) => {
        if (clickedCards.includes(name)) {
            setScore(0);
        } else {
            setClickedCards(clickedCards.concat(name));
            setScore(score + 1);
        }
        setSecretScore(score);
        displayCards();
    }

    useEffect(() => {
        if (bestScore <= score) {
            setBestScore(score);
        }
        if (secretScore > score) {
            setBestScore(secretScore);
        }
        if (score === 0) {
            setClickedCards([]);
        }
    }, [score]);

    const getRandomOrder = (arr) => {
        let a, b;
        for (let i = arr.length - 1; i > 0; i--) {
            a = Math.floor(Math.random() * (i + 1));
            b = arr[i];
            arr[i] = arr[a];
            arr[a] = b;
        }

    }

    const displayCards = () => {
        const cards = [
            <Card name="card1" src={conAir} onCardClick={onCardClick} />,
            <Card name="card1" src={itCouldHappen} onCardClick={onCardClick} />,
            <Card name="card3" src={momAndDad} onCardClick={onCardClick} />,
            <Card name="card4" src={moonstruck} onCardClick={onCardClick} />,
            <Card name="card5" src={nationalTreasure} onCardClick={onCardClick} />,
            <Card name="card6" src={pig} onCardClick={onCardClick} />,
            <Card name="card7" src={wickerMan} onCardClick={onCardClick} />,
            <Card name="card8" src={vampiresKiss} onCardClick={onCardClick} />
        ];
        getRandomOrder(cards);

        return (
          <div id="allCards">
            {cards[0]}
            {cards[1]}
            {cards[2]}
            {cards[3]}
            {cards[4]}
            {cards[5]}
            {cards[6]}
            {cards[7]}
            {cards[8]}
          </div>  
        );

    }

   return (
    <div>
        <Scoreboard score={score} bestScore={bestScore}/>
        {displayCards()}
    </div>
   );
}

export default Game;