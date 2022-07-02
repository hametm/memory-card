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
// import uniqid from "uniqid";


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
        const cardInfo = [
            {name: "Con Air", src: conAir}, 
            {name: "It Could Happen to You", src: itCouldHappen},
            {name: "Mom and Dad", src: momAndDad}, 
            {name: "Moonstruck", src: moonstruck}, 
            {name: "National Treasure", src: nationalTreasure}, 
            {name: "Pig", src: pig}, 
            {name: "The Wicker Man", src: wickerMan}, 
            {name: "Vampire's Kiss", src: vampiresKiss},
        ];
        const cards = cardInfo.map(card => {
            return <Card name={card.name} src={card.src} onCardClick={onCardClick} alt={card.name} />
        });
        getRandomOrder(cards);

        return (
          <div id="allCards">
            {cards}
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