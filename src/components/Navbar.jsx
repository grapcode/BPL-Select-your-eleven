import React from 'react';
import navImg from '../assets/logo.png';
import dollarImg from '../assets/dollar.png';

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-11/12 mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex  items-center gap-3">
        <span>{availableBalance}</span> <span>Coin</span>
        <img className="w-[20px]" src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
