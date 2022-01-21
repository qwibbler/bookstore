import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import profile from '../profile-icon.svg';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/" className="active"> Books </Link>
      <Link to="/categories"> Categories </Link>
    </nav>
    <img src={profile} alt="Login" />
  </header>
);
export default Header;
