import React from 'react';
import { Link } from 'react-router-dom';
import css from './home.module.scss';

const HomePage = () => (
  <div className={css.container}>
    <h1 className={css.title}>PhoneBook ☎️</h1>
    {/* <span className={css.text}>SignIn</span>
    <Link to="/register" className={css['home-link']}>
      Don't have an account?
    </Link>
    <Link to="/login" className={css['home-link']}>
      Already have an account?
    </Link> */}
  </div>
);

export default HomePage;
