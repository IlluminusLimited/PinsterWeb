import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@reach/router';
import SvgPanda from '../utility/svg/SvgPanda';

const NavBar = () => {
  return createPortal(
    <div className="header-util">
      <Link to="/">
        <span className="logo">
          <SvgPanda />
        </span>
      </Link>
      <nav className="header-util-nav">
        <Link to="/">Home</Link>
        <Link to="/pin/1234">Pin Detail</Link>
        <Link to="/styleguide">Styleguide</Link>
      </nav>
    </div>,
    document.getElementById('header')
  );
};

export default NavBar;
