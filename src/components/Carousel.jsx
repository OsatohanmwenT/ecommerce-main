import React from "react";
import previousImg from "/images/icon-previous.svg";
import nextImg from "/images/icon-next.svg";

const Carousel = ({ images, thumbnails, currentIndex, handleThumbnailClick, handleNext, handlePrev, openOverlay }) => {
  return (
    <div className="carousel">
      <picture className="main-display">
        <button className="control-btn prev" onClick={handlePrev}>
          <img src={previousImg} alt="previous-icon" />
        </button>
        <img onClick={openOverlay} className="main-img" src={images[currentIndex]} alt="product" />
        <button className="control-btn next" onClick={handleNext}>
          <img src={nextImg} alt="next-icon" />
        </button>
      </picture>
      <div className="images">
        {thumbnails.map((thumbnail, index) => (
          <picture
            key={index} // Unique key for each thumbnail
            className={`mini ${index === currentIndex ? "active" : ""}`} // Apply 'active' class to the current thumbnail
            onClick={() => handleThumbnailClick(index)} // Update main image on thumbnail click
          >
            <img className="product" src={thumbnail} alt={`image-product-${index + 1}`} />
            <div className="cover"></div>
          </picture>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
