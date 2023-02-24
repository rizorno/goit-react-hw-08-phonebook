import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './phone-book.module.scss';

const PhoneBook = () => (
  <>
    <h1 className={css['phone-title']}>Phonebook</h1>
    <ContactForm />
    <h2 className={css['phone-subtitle']}>Contacts</h2>
    <Filter />
    <ContactList />
  </>
);

export default PhoneBook;
