import React from "react";

const Card = (props) => {

    return (
        <div id="cardContainer">
            <img className="card" 
                src={props.src} 
                onClick={() => props.onCardClick(props.name)} 
                alt={props.alt} 
                key={props.id} 
            />
            <h3>{props.name}</h3>
        </div>
    );
}

export default Card;
