import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { Formik } from 'formik';
import { Form, Field } from 'formik';
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

  const handleSubmit = () => {
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css['login-box-wrapper']}>
      <h1 className={css['login-title']}>Login Page</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css['login-form']} autoComplete="off">
          <label className={css['login-label']}>Email</label>
          <Field
            type="email"
            name="email"
            value={email}
            className={css['login-field']}
            onChange={handleChange}
            required
          />

          <label className={css['login-label']}>Password</label>
          <Field
            type="password"
            name="password"
            value={password}
            className={css['login-field']}
            onChange={handleChange}
            required
          />
          <button type="submit" children="Log in" />
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
