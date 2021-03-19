import React from 'react';
import ReactLogo from '../../planet.svg';

const Header = () => {
    return (
      <header className='center header'>
        <div className="logoContainer">
        <p className="logo"> <img src={ReactLogo} alt = "React Logo" /></p>
        <p className="logoText">Weather App</p>
        </div>
          
      </header>
    )
}

export default Header

