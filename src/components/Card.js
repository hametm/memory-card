import React from "react";

const Card = (props) => {

    return (
        <figure id="cardContainer">
            <img className="card" 
                src={props.src} 
                onClick={() => props.onCardClick(props.name)} 
                alt={props.alt} 
                key={props.id} 
            />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default Card;
