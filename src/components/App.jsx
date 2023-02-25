import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';

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
    </Routes>
  );
};
