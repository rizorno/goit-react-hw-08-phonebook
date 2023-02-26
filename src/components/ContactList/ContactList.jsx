import { useDispatch, useSelector } from 'react-redux';
import {
  selectFindElementName,
  selectFindElementNumber,
} from '../../redux/selectors';
import { deleteContactThunk } from '../../redux/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './contact-list.module.scss';

const ContactList = () => {
  const filterName = useSelector(selectFindElementName);
  const filterNumber = useSelector(selectFindElementNumber);
  const dispatch = useDispatch();

  const array = filterName.length > 0 ? filterName : filterNumber;

  const elements = array.map(element => {
    const { id, name, number } = element;

    const handleDeleteContact = () => {
      dispatch(deleteContactThunk(id));
      Notify.success('The contact has been successfully deleted.');
    };

    return (
      <li key={id} className={css['list-item']}>
        <div className={css.box}>
          <p className={css.name}>{name}:</p>
          <p className={css.number}>{number}</p>
        </div>
        <button
          type="button"
          onClick={handleDeleteContact}
          className={css['list-button']}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ol className={css['list-box']}>{elements}</ol>;
};

export default ContactList;
