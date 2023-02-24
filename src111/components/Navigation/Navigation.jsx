import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import css from './navigation.module.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn ? (
        <NavLink
          to="/"
          exact="true"
          //  style={({ isActive }) =>
          //    isActive ? css['nav__link--current'] : css['nav__link']
          //  }
        >
          Home
        </NavLink>
      ) : (
        <NavLink
          to="/contactcs"
          exact="true"
          //  style={({ isActive }) =>
          //    isActive ? css['nav__link--current'] : css['nav__link']
          //  }
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
