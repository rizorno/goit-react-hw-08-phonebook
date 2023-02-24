import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserThunk, logOutThunk } from 'redux/auth/authOperations';
import { selectToken, selectUserName } from 'redux/selectors';
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
      <div position="static" className={css['wrapper']}>
        <div className={css['box-layout']}>
          <h1 className={css['layout-title']}>
            {userName ? `${userName}'s Phonebook` : 'PhoneBook Service'}
          </h1>
          {token ? (
            <>
              <NavLink to="/contacts" className={css['layout-link-login']}>
                Contacts
              </NavLink>
              <button onClick={logOuthandler} className={css['layout-button']}>
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={css['layout-link-login']}>
                Log in
              </NavLink>
              <NavLink to="/register" className={css['layout-link']}>
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SharedLayout;
