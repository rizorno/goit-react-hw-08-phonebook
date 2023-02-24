import { Formik, ErrorMessage } from 'formik';
import { Form, Field } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Button } from 'components/Buttons/Button';
import {
  useFetchContactsQuery,
  useAddContactsMutation,
} from 'redux/api/contactsApi';
// import propTypes from 'prop-types';
import { SpinnerInfinity } from 'spinners-react';
import css from './contact-form.module.scss';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const Schema = yup.object({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('required field'),
  number: yup
    .string()
    .required('required field')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(phoneRegExp, 'phone number is not valid'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={css['error-message']}>{message}</p>}
    />
  );
};

export const ContactForm = () => {
  const contacts = useSelector(useFetchContactsQuery);
  const [newContact, { isLoading }] = useAddContactsMutation();

  const handleSubmitForm = ({ name, number }, { resetForm }) => {
    const messageName = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (messageName) {
      toast.warn(`${messageName.name} is already in contacts!`);
      return;
    }

    const messageNumber = contacts.find(element => element.number === number);
    if (messageNumber) {
      toast.warn(`${messageNumber.number} is already in contacts!`);
      return;
    }

    newContact({ name, number });
    toast.success(`${name} is added to the phonebook `);

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
          filter: '',
        }}
        validationSchema={Schema}
        onSubmit={handleSubmitForm}
      >
        <Form className={css['contact-form']} autoComplete="off">
          <label className={css['contact-label']}>Name</label>
          <Field
            type="text"
            name="name"
            className={css['contact-field']}
            title="Name"
            required
          />
          <FormError name="name" />

          <label className={css['contact-label']}>Number</label>
          <Field
            type="tel"
            name="number"
            className={css['contact-field']}
            title="Number"
            required
          />
          <FormError name="number" />

          <Button
            type="submit"
            children={
              isLoading ? (
                <SpinnerInfinity
                  сolor="#910ac7"
                  secondaryColor="rgba(0,0,0,0.1)"
                  thickness="80"
                  speed="200"
                />
              ) : (
                'Add contact'
              )
            }
          />
        </Form>
      </Formik>
    </>
  );
};

// ContactForm.propTypes = {
//   onSubmit: propTypes.func,
//   contacts: propTypes.arrayOf(propTypes.object),
// };
