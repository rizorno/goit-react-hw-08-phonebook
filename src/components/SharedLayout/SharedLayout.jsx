import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserThunk, logOutThunk } from 'redux/auth/authOperations';
import { selectToken, selectUserName } from 'redux/selectors';
import Footer from '../Footer/Footer';
import css from './shared-layout.module.scss';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserThunk());
    if (token) {
      navigate('/contacts');
    }
  }, [dispatch, navigate, token]);

  const logOuthandler = () => {
    dispatch(logOutThunk());
    navigate('/login');
  };

  return (
    <>
      <header position="static" className={css['wrapper']}>
        <nav className={css['box-layout']}>
          <NavLink to="/" className={css['nav-logo']}>
            <h2 className={css['nav-title']}>
              {userName ? `${userName}'s phonebook ☎️` : 'PhoneBook ☎️'}
            </h2>
          </NavLink>
          {token ? (
            <div className={css['nav__box']}>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? css['nav__link--current'] : css['nav__link']
                }
              >
                Contacts
              </NavLink>
              <button onClick={logOuthandler} className={css['layout-button']}>
                Log out
              </button>
            </div>
          ) : (
            <div className={css['nav__box']}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? css['nav__link--current'] : css['nav__link']
                }
              >
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? css['nav__link--current'] : css['nav__link']
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </nav>
      </header>

      <Suspense fallback={<div className={css['box-loading']}>Loading...</div>}>
        <Outlet />

        <div className={css['layout-wrapper']}>
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default SharedLayout;
