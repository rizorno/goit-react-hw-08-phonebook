import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContactThunk } from '../../redux/operations';
import css from './contact-list.module.scss';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // eslint-disable-next-line array-callback-return
  const elements = contacts.map(element => {
    const { id, name, number } = element;

    const handleDeleteContact = () => {
      dispatch(deleteContactThunk(id));
    };

    const findElementName = name.toLowerCase().includes(filter.toLowerCase());

    const findElementNumber = number.includes(filter);

    if (findElementName) {
      return (
        <li key={id}>
          <div className={css.box}>
            <p className={css.name}>{name}:</p>
            <p className={css.number}>{number}</p>
          </div>
          <button type="button" onClick={handleDeleteContact}>
            Delete
          </button>
        </li>
      );
    } else if (findElementNumber) {
      return (
        <li key={id}>
          <div className={css.box}>
            <p className={css.name}>{name}:</p>
            <p className={css.number}>{number}</p>
          </div>
          <button type="button" onClick={handleDeleteContact}>
            Delete
          </button>
        </li>
      );
    }
  });

  return <ul>{elements}</ul>;
};

export default ContactList;
