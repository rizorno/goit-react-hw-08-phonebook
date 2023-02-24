import { ReactComponent as DeleteIcon } from '../../images/delicon.svg';
import { SpinnerDotted } from 'spinners-react';
import { ButtonIcon } from '../Buttons/ButtonIcon';
import { useRemoveContactsMutation } from 'redux/api/contactsApi';
// import propTypes from 'prop-types';
import css from './contact-item.module.scss';

export const ContactItem = ({ id, name, number }) => {
  const [removeContacts, { isLoading }] = useRemoveContactsMutation();

  return (
    <>
      {isLoading && <SpinnerDotted />}
      <li className={css['item-list']}>
        <p className={css['item-name']}>{name}:</p>
        <p className={css['item-number']}>{number} </p>
        <ButtonIcon
          aria-label="Delete contact"
          onClick={() => removeContacts(id)}
          disabled={isLoading}
        >
          <DeleteIcon />
        </ButtonIcon>
      </li>
    </>
  );
};

// ContactItem.propTypes = {
//   name: propTypes.string.isRequired,
//   id: propTypes.string.isRequired,
//   number: propTypes.string.isRequired,
// };
