import React from 'react';
import { primaryColor, imagePath } from '../../utils';
import './style.css';

const style = {
  background: primaryColor
}

const Header = () => {
  return (
    <div className="header" style={style} >
      <img src={`${imagePath}/logo.png`} />
    </div>
  ); 
};

export default Header;