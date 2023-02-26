import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContactsThunk } from 'redux/operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFindElementName,
  selectFindElementNumber,
} from 'redux/selectors';
import css from './contacts.module.scss';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectFindElementName);
  const filterNumber = useSelector(selectFindElementNumber);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={css['contacts-box']}>
      <h1 className={css['contacts-title']}>Add contact</h1>
      <ContactForm />
      <Filter />
      {isLoading && !error && <></>}
      <h2 className={css['contacts-subtitle']}>
        Total contacts:{' '}
        {filterName.length || filterNumber.length >= 0
          ? filterName.length || filterNumber.length
          : contacts.length}
      </h2>
      <ContactList />
    </div>
  );
};

export default Contacts;
