import React from 'react';
import './card.css';

function Card(props) {
  return <div className='card'>{props.children}</div>;
}

Card.Title = function (props) {
  return <div className='card-title'>{props.children}</div>;
};

Card.Img = function (props) {
  return <img className='card-img' src={props.src} alt={props.alt} />;
};

Card.Body = function (props) {
  return <div className='card-body'>{props.children}</div>;
};

Card.Text = function (props) {
  return <div className='card-text'>{props.children}</div>;
};

export default Card;
