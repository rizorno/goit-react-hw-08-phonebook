import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './auth-nav.module.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact="true"
      // style={({ isActive }) =>
      //   isActive ? css['nav__link--current'] : css['nav__link']
      // }
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      exact="true"
      // style={({ isActive }) =>
      //   isActive ? css['nav__link--current'] : css['nav__link']
      // }
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
