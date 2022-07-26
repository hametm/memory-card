import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import "./styles/style.css";
import { v4 as uuid } from 'uuid';
import conAir from "./styles/images/con-air.png";
import itCouldHappen from "./styles/images/it-could-happen-to-you.png";
import momAndDad from "./styles/images/mom-and-dad.png";
import moonstruck from "./styles/images/moonstruck.png";
import nationalTreasure from "./styles/images/national-treasure.png";
import pig from "./styles/images/pig.png";
import wickerMan from "./styles/images/the-wicker-man.png";
import vampiresKiss from "./styles/images/vampires-kiss.png";

const App = () => {
    const [score, setScore] = useState(0);
    const [secretScore, setSecretScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (bestScore <= score) setBestScore(score);
        if (secretScore > score) setBestScore(secretScore);
        if (score === 0) setClickedCards([]);
    }, [score]);

    useEffect(() => {
        const cards = document.querySelectorAll(".cardContainer");
        if (score === 0 && flag) {
            cards.forEach(card => {
                card.classList.add("redAnimation");
            });
        } 
        return () => {
            cards.forEach(card => {
                card.classList.remove("redAnimation");
            });
        }
    });

    useEffect(() => {
        const cards = document.querySelectorAll(".cardContainer");
        if (score === 7) {
            cards.forEach(card => {
                card.classList.add("greenAnimation");
            });
        } 
        return () => {
            cards.forEach(card => {
                card.classList.remove("greenAnimation");
            });
        }
    });

    const announceWinner = () => {
        if (score === 7) {
            return (
                <div className="popup">
                    <h1>You win!</h1>
                    <p>Click any card to play again.</p>
                </div>
            );
        }
    }

    const onCardClick = (name) => {
        if (score === 7) {
            setSecretScore(score);
            startNewGame();
        }
        else {
            setFlag(true);
            if (clickedCards.includes(name)) resetGame();
            else incrementScore(name);
            setSecretScore(score);
            displayCards();
        }
    }

    const changeOrder = (arr) => {
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
            {name: "Con Air (1997)", src: conAir, id: uuid()}, 
            {name: "It Could Happen to You (1994)", src: itCouldHappen, id: uuid()},
            {name: "Mom and Dad (2017)", src: momAndDad, id: uuid()}, 
            {name: "Moonstruck (1987)", src: moonstruck, id: uuid()}, 
            {name: "National Treasure (2004)", src: nationalTreasure, id: uuid()}, 
            {name: "Pig (2021)", src: pig, id: uuid()}, 
            {name: "The Wicker Man (2006)", src: wickerMan, id: uuid()}, 
            {name: "Vampire's Kiss (1988)", src: vampiresKiss, id: uuid()}
        ];
        const cards = cardInfo.map(card => {
            return (
                <Card name={card.name} 
                    src={card.src} 
                    onCardClick={onCardClick} 
                    alt={card.name} 
                    key={card.id} 
                />
            );
        });

        changeOrder(cards);

        return (
          <div id="allCards">{cards}</div>  
        );
    }

    const resetGame = () => {
        setScore(0);
    }

    const incrementScore = (name) => {
        setClickedCards(clickedCards.concat(name));
        setScore(x => x + 1);
    }

    const startNewGame = () => {
        if (score === 7) {
            setFlag(false);
            resetGame();
        }
    }

   return (
    <div id="game">
        <header>
            <div id="headerText">
                <h1>Memory Game</h1>
                <p>Click the pics of Nic, but don't click the same one twice, or he'll get angry!</p>
            </div>
            <Scoreboard score={score} bestScore={bestScore}/>
        </header>
        <main>
            {announceWinner()}
            {displayCards()}
        </main>
    </div>
   );
}

export default App;