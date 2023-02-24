import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from '../../redux/selectors';
import { addContactThunk } from '../../redux/operations';
import css from './contact-form.module.scss';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;

    const messageName = contacts.find(
      element => element.name === form.name.value
    );
    if (messageName) {
      alert(`${messageName.name} is already in contacts!`);
      return;
    }

    const messageNumber = contacts.find(
      element => element.number === form.number.value
    );
    if (messageNumber) {
      alert(`${messageNumber.number} is already in contacts!`);
      return;
    }

    dispatch(
      addContactThunk({ name: form.name.value, number: form.number.value })
    );
    form.reset();
  };

  const idElement = nanoid();

  return (
    <form onSubmit={handleSubmitForm} className={css['contact-form']}>
      <label className={css['contact-label']}>Name</label>
      <input
        id={idElement}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="name..."
        autoComplete="off"
        className={css['contact-input']}
      />

      <label className={css['contact-label']}>Number</label>
      <input
        id={idElement}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="number..."
        autoComplete="off"
        className={css['contact-input']}
      />

      <button type="submit" className={css['contact-button']}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
