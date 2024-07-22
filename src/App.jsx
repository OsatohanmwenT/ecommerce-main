import React, { useState } from "react";
import Button from "./components/Button";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";
import ProductCount from "./components/ProductCount";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Overlay from "./components/OverLay";
import image1 from "/images/image-product-1.jpg";
import image2 from "/images/image-product-2.jpg";
import image3 from "/images/image-product-3.jpg";
import image4 from "/images/image-product-4.jpg";
import thumbnail1 from '/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '/images/image-product-4-thumbnail.jpg';

export default function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

 const images = [image1, image2, image3, image4];
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  const toggleOverlayOn = () => {
    setIsOverlayVisible(true);
  };

  const toggleOverlayOff = () => {
    setIsOverlayVisible(false);
  };

  function add() {
    setItemCount(prevCount => prevCount = prevCount + 1)
  }

  function minus() {
    setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
  }

  function clearCart() {
    setCartItems(0)
  }

  function displayCart() {
    setIsCartVisible(prevIsCartVisible => !prevIsCartVisible);
  }

  function addToCart() {
    setCartItems(prevCartItems => itemCount);
  }

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return(
      <div className="wrapper">
        <Navbar display={displayCart} />
        {isCartVisible && <Cart count={cartItems} clearCart={clearCart}></Cart>}
        <main className="container">
        <Carousel 
          images={images}
          thumbnails={thumbnails}
          currentIndex={currentIndex}
          openOverlay={toggleOverlayOn}
          handleThumbnailClick={handleThumbnailClick}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        {isOverlayVisible && (
          <Overlay
            images={images}
            thumbnails={thumbnails}
            currentIndex={currentIndex}
            handleThumbnailClick={handleThumbnailClick}
            handleNext={handleNext}
            handlePrev={handlePrev}
            closeOverlay={toggleOverlayOff}
          />
        )}
          <div className="info">
            <Details />
            <div className="control">
              <ProductCount minus={minus} add={add} count={itemCount}/>
              <Button val="Add to cart" toCart={addToCart}/>
            </div>
          </div>
        </main>
      </div>
  )
}
