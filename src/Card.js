import React from 'react';
import './index.css';

function Card(props) {
  return (
    <div id="card">
        {console.log(props)}
        <img src={props.image} alt="image" />
        <div id="description"> <div>{props.name}</div>{props.desc}</div>
        <div id="card-footer"> <a href={props.link}>Read more...</a> </div>
    </div>
  );
}

export default Card;
