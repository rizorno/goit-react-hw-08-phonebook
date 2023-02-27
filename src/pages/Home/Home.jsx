import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import css from './home.module.scss';

const HomePage = () => (
  <>
    <div className={css['home-container']}>
      <h1 className={css['home-title']}>PhoneBook ☎️</h1>
      <h2 className={css['home-subtitle']}>
        Your personal phonebook where you can add, change and delete contacts!
      </h2>
      <Link to="/register" className={css['home-link']}>
        Don't have an account?
      </Link>
      <Link to="/login" className={css['home-link']}>
        Already have an account?
      </Link>
    </div>
    <Footer />
  </>
);

export default HomePage;
