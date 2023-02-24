import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { Formik } from 'formik';
import { Form, Field } from 'formik';
import css from './register.module.scss';

const initialValues = {
  name: '',
  number: '',
  filter: '',
};

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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css['login-box-wrapper']}>
      <h1 className={css['login-title']}>Registration Page</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css['login-form']} autoComplete="off">
          <label className={css['login-label']}>Name</label>
          <Field
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={css['login-field']}
            required
          />

          <label className={css['login-label']}>Email</label>
          <Field
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css['login-field']}
            required
          />

          <label className={css['login-label']}>Password</label>
          <Field
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={css['login-field']}
            required
          />

          <button type="submit" children="Register" />
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
