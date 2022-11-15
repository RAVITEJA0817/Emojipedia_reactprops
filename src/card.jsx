import React from "react";
import { ReactDOM } from "react";
import Emojipedia from './data';

function Card1(props) {
    return (
        <div className="div1">
            <p className="id"></p>
            <h1 className="emoji">{props.emoji}</h1>
            <h2 className="name">{props.name}</h2>
            <p className="mean">{props.mean}</p>
        </div>
    )
} export default Card1;