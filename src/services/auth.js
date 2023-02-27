import { privateApi, publicApi } from './routes';

export const token = {
  set: token => {
    privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateApi.defaults.headers.common.Authorization = '';
  },
};

export const signUpService = async user => {
  const { data } = await publicApi.post('users/signup', user);
  return data;
};

export const loginService = async user => {
  const { data } = await publicApi.post('users/login', user);
  return data;
};

export const getUserService = async () => {
  const { data } = await privateApi.get('users/current');
  return data;
};

export const logOutService = async () => {
  const { data } = await privateApi.post('users/logout');
  return data;
};

export const getContacts = async () => {
  const { data } = await privateApi.get('contacts');
  //   console.log(data);
  return data;
};

export const addContact = async contact => {
  const { data } = await privateApi.post('contacts', contact);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await privateApi.delete(`contacts/${contactId}`);
  return data;
};

export const changeContact = async (contactId, contact) => {
  const { data } = await privateApi.patch(`contacts/${contactId}`, contact);
  return data;
};
