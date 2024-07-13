import React from "react";
import thumbnailImg from "/images/image-product-1-thumbnail.jpg";
import deleteImg from "/images/icon-delete.svg";

export default function Cart(props) {

    let amount = props.count * 125;

    return(
        <div className="cart-display">
            <h4>Cart</h4>
            <div className="divider"></div>
            {props.count > 0 ? (
              <>
        <div className="content">
          <img
            className="cart-img"
            src={thumbnailImg}
            alt="image"
          />
          <div className="cart-info">
            <p className="product-name">Fall Limited Edition Sneakers</p>
            <p>
              $125.00 x {props.count} <span>${amount}.00</span>
            </p>
          </div>
          <button className="delete-btn" onClick={props.clearCart}>
            <img
              className="delete"
              src={deleteImg}
              alt="delete-button"
            />
          </button>
        </div>
        <button className="btn">Checkout</button>
        </>        
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
    )
}