import React from 'react';
import cx from 'classnames';
import { primaryColor, secondaryColor, fontFamily, imagePath } from '../../../utils';
import './styles.css'

const style = {
  background: secondaryColor,
}

const contentStyle = {
  background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
}

const headerStyle = {
  font: `700 20px ${fontFamily}`
};
const profileDetailStyle = {
  font: `300 16px/20px ${fontFamily}`
}

const cardsList = [1,2,3,4,5,6];

const ShaadiCard = () => {
  const photo = `${imagePath}/person.jpg`;
  return (
    <section className="cardSection">
      {cardsList.map((item) => (
        <div className="cardWrapper" key={item}>
        <div className="box">
          <div className="imgWrapper">
            <img src={photo} className={cx('imgWrapper', 'img')} alt={photo} />
          </div>
          <div className="contentWrapper" style={style} >
            <div style={contentStyle}>
              <h2 className="primaryHeader" style={headerStyle}>Profile Details</h2>
              <p className="profileContent" style={profileDetailStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </div>
        </div>
      </div>
      ))}
    </section>
  )
}

export default ShaadiCard;
