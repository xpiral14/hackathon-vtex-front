import React from 'react';
import { Link } from 'react-router-dom';


const Nav: React.FC = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
      </nav>
    </aside>
  );
};

export default Nav;
