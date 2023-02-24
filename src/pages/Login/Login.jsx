import { loginThunk } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import css from './login.module.scss';

const initialValues = {
  name: '',
  number: '',
  filter: '',
};

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
        initialValues={initialValues}
      >
        <label className={css['login-label']}>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          className={css['login-field']}
          onChange={handleChange}
          required
        />

        <label className={css['login-label']}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          className={css['login-field']}
          onChange={handleChange}
          required
        />
        <button
          className={css['login-button']}
          type="submit"
          children="Login"
        />
      </form>
    </div>
  );
};

export default Login;
