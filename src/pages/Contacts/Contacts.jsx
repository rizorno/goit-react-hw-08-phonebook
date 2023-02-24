import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContactsThunk } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import css from './contacts.module.scss';

const Contacts = () => {
  const contacts = useSelector(selectContacts).length;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={css['contacts-box']}>
      <h1 className={css['contacts-title']}>Add contact</h1>
      <ContactForm />
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <h2 className={css['contacts-subtitle']}>Total contacts: {contacts}</h2>
      <ContactList />
    </div>
  );
};

export default Contacts;
