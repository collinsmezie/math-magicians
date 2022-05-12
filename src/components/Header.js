import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
    <div className='header'>
        <h1>Math magicians</h1>

    <div className="navigation">
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/calculator">Calculator</Link>
      <Link className="nav" to="/quotes">Quotes</Link>
    </div>

    </div>
    
    </>
  );
}

export default Header;
