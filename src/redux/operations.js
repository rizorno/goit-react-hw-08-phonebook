import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  token,
  getContacts,
  addContact,
  deleteContact,
  changeContact,
} from '../services/auth';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      token.set(getState().auth.token);
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      return await addContact(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      return await deleteContact(contactId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeContactThunk = createAsyncThunk(
  'contacts/changeContact',
  async ({ contactId, contact }, thunkAPI) => {
    try {
      return await changeContact(contactId, contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
