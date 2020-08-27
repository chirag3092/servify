import React from 'react';
import { primaryColor, companyName, fontFamily } from '../../utils';
import './styles.css';

const style = {
  background: primaryColor,
  font: `500 20px ${fontFamily}`
}

const Footer = () => (
  <div className="footer" style={style} >
    <div className="footerContent" >{companyName}&copy;{new Date().getFullYear()}</div>
  </div>
)

export default Footer;