import React from 'react';
import {Link} from "react-router-dom";


const Cards = () => {
  return (
    <div className='card'>
      <img src="" alt="" className='card-img-top'/>
      <div className='card-body'>
        <h5 className='card-title'>React</h5>
        <Link to={'/profile/' + 'react'} className='btn btn-primary' >Open</Link>
      </div>
    </div>
  );
};

export default Cards;