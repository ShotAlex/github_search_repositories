import React from 'react';
import {Link} from "react-router-dom";


const Cards = ({user}) => {
  return (
    <div className='card'>
      <img src={user.avatar_url} alt={user.login} className='card-img-top'/>
      <div className='card-body'>
        <h5 className='card-title'>{user.login}</h5>
        <Link to={'/profile/' + user.login} className='btn btn-primary' >Open</Link>
      </div>
    </div>
  );
};

export default Cards;