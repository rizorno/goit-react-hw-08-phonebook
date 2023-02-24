import propTypes from 'prop-types';
import css from './button.module.scss';

export const Button = ({ type, onClick, children }) => {
  return (
    <button className={css.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

// Button.propTypes = {
//   type: propTypes.string.isRequired,
//   onClick: propTypes.func,
//   children: propTypes.any,
// };
