import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { useFetchContactsQuery } from '../../redux/api/contactsApi';
import { SpinnerDotted } from 'spinners-react';
import { getvisibleContacts } from 'redux/filter/selector';
import authSelectors from 'redux/auth/authSelectors';
import css from './contact-list.module.scss';

export const ContactList = () => {
  const { data, isFetching, error, refetch } = useFetchContactsQuery();
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    refetch();
  }, [token, refetch]);

  useEffect(() => {
    if (error) {
      toast.error(`Server error`);
    }
  }, [error]);

  const visibleContacts = useSelector(state => getvisibleContacts(state, data));

  return (
    <>
      {isFetching && !visibleContacts && <SpinnerDotted color="#055770" />}
      {visibleContacts && (
        <h2 className={css['list-title']}>
          Total contacts: {visibleContacts.length}
        </h2>
      )}
      <ol className={css['list']}>
        {visibleContacts &&
          visibleContacts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, number }) => (
              <ContactItem name={name} key={id} id={id} number={number} />
            ))}
      </ol>
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from '../../redux/selectors';
// import { deleteContact } from '../../redux/operations';
// import css from './contact-list.module.scss';

// const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();

//   // eslint-disable-next-line array-callback-return
//   const elements = contacts.map(element => {
//     const { id, name, phone } = element;

//     const handleDeleteContact = () => {
//       dispatch(deleteContact(id));
//     };

//     const findElementName = name.toLowerCase().includes(filter.toLowerCase());

//     const findElementNumber = phone.includes(filter);

//     if (findElementName) {
//       return (
//         <li key={id}>
//           <div className={css.box}>
//             <p className={css.name}>{name}:</p>
//             <p className={css.number}>{phone}</p>
//           </div>
//           <button type="button" onClick={handleDeleteContact}>
//             Delete
//           </button>
//         </li>
//       );
//     } else if (findElementNumber) {
//       return (
//         <li key={id}>
//           <div className={css.box}>
//             <p className={css.name}>{name}:</p>
//             <p className={css.number}>{phone}</p>
//           </div>
//           <button type="button" onClick={handleDeleteContact}>
//             Delete
//           </button>
//         </li>
//       );
//     }
//   });

//   return <ul>{elements}</ul>;
// };

// export default ContactList;
