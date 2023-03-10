import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';
import css from './register.module.scss';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(signUpThunk(userData));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css['register-box-wrapper']}>
      <h1 className={css['register-title']}>Registration Page</h1>
      <form className={css['register-form']} onSubmit={handleSubmit}>
        <label className={css['register-label']}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={css['register-input']}
          required
          placeholder="name..."
          autoComplete="off"
        />

        <label className={css['register-label']}>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={css['register-input']}
          required
          placeholder="email..."
          autoComplete="off"
        />

        <label className={css['register-label']}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={css['register-input']}
          required
          placeholder="password..."
          autoComplete="off"
        />

        <button
          className={css['register-button']}
          type="submit"
          children="Register"
        />
      </form>
      <NavLink to="/login" className={css['link-login']}>
        Already have an account? Login
      </NavLink>
    </div>
  );
};

export default Register;
