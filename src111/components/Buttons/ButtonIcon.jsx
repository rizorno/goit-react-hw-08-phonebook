import React from 'react';
// import propTypes from 'prop-types';
import css from './button.module.scss';

export const ButtonIcon = ({ children, onClick, ...allyProps }) => {
  return (
    <button
      className={css['button-icon']}
      type="button"
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

// ButtonIcon.defaultProps = {
//   onClick: () => null,
//   children: null,
// };

// ButtonIcon.propTypes = {
//   children: propTypes.node,
//   onClick: propTypes.func,
//   'aria-label': propTypes.string.isRequired,
// };
