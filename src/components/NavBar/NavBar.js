import React from 'react';

const NavBar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className='navbar-brand'>
        Github search
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a href="#" className='nav-link'>Main</a>
        </li>
        <li className='nav-item'>
          <a href="#" className='nav-link'>Info</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;