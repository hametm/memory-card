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
            <Card name="Con Air" src={conAir} onCardClick={onCardClick} />,
            <Card name="It Could Happen to You" src={itCouldHappen} onCardClick={onCardClick} />,
            <Card name="Mom and Dad" src={momAndDad} onCardClick={onCardClick} />,
            <Card name="Moonstruck" src={moonstruck} onCardClick={onCardClick} />,
            <Card name="National Treasure" src={nationalTreasure} onCardClick={onCardClick} />,
            <Card name="Pig" src={pig} onCardClick={onCardClick} />,
            <Card name="The Wicker Man" src={wickerMan} onCardClick={onCardClick} />,
            <Card name="Vampire's Kiss" src={vampiresKiss} onCardClick={onCardClick} />
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
    <div id="game">
        <header>
            <div id="headerText">
                <h1>Memory Game</h1>
                <p>Look, here's the deal. You click the pictures of me, but don't click the same one twice.
                    I said, DON'T CLICK IT TWICE! How many TIMES do I have to REPEAT myself? 
                    You click on ONE, then you find ANOTHER one, it's &mdash; 
                </p>
            </div>
            <Scoreboard score={score} bestScore={bestScore}/>
        </header>
        <main>
            {displayCards()}
        </main>
    </div>
   );
}

export default Game;