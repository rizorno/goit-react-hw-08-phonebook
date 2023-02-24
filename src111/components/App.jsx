import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerInfinity } from 'spinners-react';
import authSelectors from '../redux/auth/authSelectors';
import authOperations from '../redux/auth/authOperations';
import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer.jsx';
import PublicRoute from '../route/PublicRoute';
import PrivateRoute from '../route/PrivateRoute';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import PhoneBook from 'pages/PhoneBook/PhoneBook';
import css from './app.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={css['global-wrapper']}>
      <>
        <AppBar />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <PhoneBook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
      {/* {isFetchingUser ? (
        <div style={{ height: '80vh' }}>
          <SpinnerInfinity
            color="#055770"
            secondaryColor="rgba(0,0,0,0.1)"
            size="100"
            speed="150"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginLeft: -50,
              marginTop: -50,
            }}
          />
        </div>
      ) : (
        <>
          <AppBar />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <PhoneBook />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )} */}
      <Footer />
    </div>
  );
};
