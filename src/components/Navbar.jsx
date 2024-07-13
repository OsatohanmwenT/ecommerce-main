import React,{ useState } from 'react';
import burgermenuImg from "/images/icon-menu.svg";
import closeImg from "/images/icon-close.svg";
import logoImg from "/images/logo.svg";
import cartImg from "/images/icon-cart.svg";
import avaterImg from "/images/image-avatar.png";

export default function Navbar({ display }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    function toggleBtn() {
        setIsMenuVisible(true)
    }

    function exitBtn() {
        setIsMenuVisible(false)
    }
      
    return(
        <header className='navigation-bar'>
            <div className="left">
                <button onClick={toggleBtn} className="toggle-btn">
                    <img className='toggle' src={burgermenuImg} alt="burger-menu-icon" />
                </button>
                {isMenuVisible &&
                    <div className='burger-menu'>
                    <button className='toggle-btn' onClick={exitBtn}>
                        <img src={closeImg} alt="icon-close" />
                    </button>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                }
                <img className='logo' src={logoImg} alt="logo" />
                <nav>
                    <ul className='primary-navigation underline-indicators'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <picture className='right'>
                <img className='cart' src={cartImg} alt="cart" onClick={display} />
                <img className='img avatar' src={avaterImg} alt="avatar" />
            </picture>
        </header>
    )
}