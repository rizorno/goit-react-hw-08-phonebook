import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectChange, selectChangeElement } from '../../redux/selectors';
import { setChange } from '../../redux/changeSlice';
import { changeContactThunk } from 'redux/operations';
import css from './change-contact.module.scss';

const ChangeContact = () => {
  const change = useSelector(selectChange);
  const initialChange = useSelector(selectChangeElement);
  const contactId = change.id;
  const dispatch = useDispatch();

  useEffect(() => {
    const closeBtnEscBackdrop = ({ code }) => {
      if (code === 'Escape') {
        dispatch(setChange(''));
      }
    };

    window.addEventListener('keydown', closeBtnEscBackdrop);

    return () => {
      window.removeEventListener('keydown', closeBtnEscBackdrop);
    };
  });

  const closeBtnEscBackdrop = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      dispatch(setChange(''));
    }
  };

  const handleChangeName = e => {
    const { value } = e.target;
    dispatch(setChange({ ...change, name: value }));
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    dispatch(setChange({ ...change, number: value }));
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (
      initialChange.name === change.name &&
      initialChange.number === change.number
    ) {
      Notify.warning('Try to change something first.');
      return;
    }

    Notify.success('The contact has been successfully changed.');
    dispatch(setChange(''));

    const contact = {
      name: change.name,
      number: change.number,
    };

    dispatch(changeContactThunk({ contactId, contact }));
  };

  const template = (
    <div className={css['overlay']} onClick={closeBtnEscBackdrop}>
      <div className={css['change-modal']}>
        <h2 className={css['contacts-subtitle']}>Change Contact</h2>
        <button
          type="button"
          className={css['change-modal__btn-close']}
          aria-label="Close"
          onClick={closeBtnEscBackdrop}
        />

        <form className={css['change-form']} onSubmit={onSubmitForm}>
          <label className={css['change-label']}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="name..."
            autoComplete="off"
            className={css['change-input']}
            value={change.name}
            onChange={handleChangeName}
          />

          <label className={css['change-label']}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="number..."
            autoComplete="off"
            className={css['change-input']}
            value={change.number}
            onChange={handleChangeNumber}
          />

          <button type="submit" className={css['change-button']}>
            Change contact
          </button>
        </form>
      </div>
    </div>
  );
  return change ? (
    createPortal(template, document.getElementById('modal'))
  ) : (
    <></>
  );
};

export default ChangeContact;
