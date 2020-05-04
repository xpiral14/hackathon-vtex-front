import React from 'react';
import { Link } from 'react-router-dom';


const Nav: React.FC = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/">dsds</Link>
        <Link to="/">sdsd</Link>
      </nav>
    </aside>
  );
};

export default Nav;
