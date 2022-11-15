import React from "react";
import Card1 from "./card";
import Emojipedia from "./data";


function createCard(card2) {
    return (<Card1
        key={card2.id}
        name={card2.name}
        emoji={card2.emoji}
        mean={card2.meaning}
    />
    )
}


function Card() {
    return (
        <div>
            {Emojipedia.map(createCard)}
        </div>
    )
}
export default Card;