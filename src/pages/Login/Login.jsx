import { loginThunk } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './login.module.scss';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginThunk(userData));
  };
  return (
    <div className={css['login-box-wrapper']}>
      <h1 className={css['login-title']}>Login Page</h1>

      <form
        className={css['login-form']}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className={css['login-label']}>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          className={css['login-input']}
          onChange={handleChange}
          autoComplete="off"
          required
          placeholder="email..."
        />

        <label className={css['login-label']}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          className={css['login-input']}
          onChange={handleChange}
          autoComplete="off"
          required
          placeholder="password..."
        />

        <button
          className={css['login-button']}
          type="submit"
          children="Login"
        />
      </form>
      <NavLink to="/register" className={css['link-login']}>
        Don't have an account? Register
      </NavLink>
    </div>
  );
};

export default Login;
