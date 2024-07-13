import React from "react";
import minusImg from "/images/icon-minus.svg";
import plusImg from "/images/icon-plus.svg";

export default function ProductCount(props) {

    return(
        <div className="count">
            <button className="count-btn" onClick={props.minus} aria-label="Decrease count">
                <img src={minusImg} alt="icon-minus" />
            </button>
            <p className="item-count">{props.count}</p>
            <button className="count-btn" onClick={props.add} aria-label="Increase count">
                <img src={plusImg} alt="icon-plus" />
            </button>
        </div>
    )
}