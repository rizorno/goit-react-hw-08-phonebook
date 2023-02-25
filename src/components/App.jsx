import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/contacts"
          element={<PrivateRoute component={<Contacts />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<Register />} />}
        />
        <Route path="/login" element={<PublicRoute component={<Login />} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
