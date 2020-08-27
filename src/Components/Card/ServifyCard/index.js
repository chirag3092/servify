import React from 'react';
import { fontFamily } from '../../../utils';
import './styles.css'

const ServifyCard = () => {
  const cards = [1,2,3];
  const headerStyle = {
    font: `500 20px ${fontFamily}`
  };
  const contentStyle = {
    font: `300 20px ${fontFamily}`
  }
  return (
    <> 
      <section className="cards">
        {cards.map(item=> (
          <div className="boxWrapper" key={item}>
            <div className="icon">{item}</div>
            <div className="servieWrapper">
              <h2 style={headerStyle}>Service Name</h2>
              <p style={contentStyle}>Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem</p>
              <a className="btn btn-white" style={contentStyle} href="javascript:;">Read More</a>
            </div>
          </div>
        ))}
      </section>
    </>
  )
};

export default ServifyCard;
