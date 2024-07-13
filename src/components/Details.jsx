import React from "react";

export default function Details() {
    return(
        <article className="details">
            <h1>SNEAKER COMPANY</h1>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>These low-profile sneakers are your perfect casual wear companion.
                 Featuring a durable rubber outer sole, they’ll withstand 
                 everything the weather can offer.
            </p>
            <div className="price">
                <div className="current-price">
                    <p>$125.00</p>
                    <span>50%</span>
                </div> 
                <p className="prev-price">$250.00</p>
            </div>
            
        </article>
    )
}