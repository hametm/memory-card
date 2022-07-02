import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Card from "./Card";

const Cards = (props) => {
    const [score, setScore] = useState(0);
    const [secretScore, setSecretScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const onCardClicked = (name) => {
        if (clickedCards.includes(name)) {
            setScore(0);
        } else {
            setClickedCards(clickedCards.concat(name));
            setScore(score + 1);
        }
        setSecretScore(score);
        console.log(clickedCards);
        displayRandomOrder();
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

    const displayRandomOrder = () => {
        let randomNumberArray = [0, 1, 2];
        let displayArray = [];
        
        let randomNumber1 = Math.floor(Math.random() * 3);
        let actualNumber1 = randomNumberArray[randomNumber1];
        randomNumberArray.splice(randomNumber1, 1);
      
        let randomNumber2 = Math.floor(Math.random() * 2);
        let actualNumber2 = randomNumberArray[randomNumber2];
        randomNumberArray.splice(randomNumber2, 1);
      
        let randomNumber3 = randomNumberArray[0];
        let actualNumber3 = randomNumber3;
        
        displayArray[actualNumber1] = <Card name="card1" onBtnClick={onCardClicked} />;
        displayArray[actualNumber2] = <Card name="card2" onBtnClick={onCardClicked} />;
        displayArray[actualNumber3] = <Card name="card3" onBtnClick={onCardClicked} />;

        return (
          <div>
            {displayArray[0]}
            {displayArray[1]}
            {displayArray[2]}
          </div>  
        );

    }

   return (
    <div>
        <Scoreboard score={score} bestScore={bestScore}/>
        {displayRandomOrder()}
    </div>
   );
}

export default Cards;