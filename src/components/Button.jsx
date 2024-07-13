import React from "react";
import cartImg from "/images/icon-cart.svg";

export default function Button(props) {
    return(
        <button className="add-cart btn" type="button" onClick={props.toCart}>
            <img className="cart-icon" src={cartImg} alt="icon-cart" />
            <span>{props.val}</span>
        </button>
    )
}