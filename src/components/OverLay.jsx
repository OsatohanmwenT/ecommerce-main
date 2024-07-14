import React from "react";
import closeImg from "/images/icon-close.svg";
import previousImg from "/images/icon-previous.svg";
import nextImg from "/images/icon-next.svg";

export default function Overlay({ images, currentIndex, handleThumbnailClick, handleNext, handlePrev, closeOverlay }) {
    return(
        <div className="overlay-container">
            <button className="close-btn" onClick={closeOverlay}>
                <img src={closeImg} alt="close-icon" />
            </button>
            <div className="carousel">
                <picture className="main-display">
                    <button className="overlay-control-btn prev-btn" onClick={handlePrev}>
                        <img src={previousImg} alt="previous-icon" />
                    </button>
                    <img className="main-img" src={images[currentIndex]} alt="product" />
                    <button className="overlay-control-btn next-btn" onClick={handleNext}>
                        <img src={nextImg} alt="next-icon" />
                    </button>
                </picture>
                <div className="images">
                    {images.map((image, index) => (
                        <picture
                            key={index} // Unique key for each thumbnail
                            className={`mini ${index === currentIndex ? "active" : ""}`} // Apply 'active' class to the current thumbnail
                            onClick={() => handleThumbnailClick(index)} // Update main image on thumbnail click
                        >
                            <img className="product" src={image.replace(".jpg", "-thumbnail.jpg")} alt={`image-product-${index + 1}`} />
                            <div className="cover"></div>
                        </picture>
                    ))}
                </div>
            </div>
        </div>
    )
}
