import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { FaSignInAlt } from 'react-icons/fa';
import css from './user-menu.module.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const [letter] = name.split('');

  return (
    <div className={css['user-wrapper']}>
      <span className={css['user-name']}>{letter?.toUpperCase()}</span>
      <span>{name}</span>
      <button
        type="button"
        className={css['user-button']}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <FaSignInAlt size="30" />
      </button>
    </div>
  );
}
