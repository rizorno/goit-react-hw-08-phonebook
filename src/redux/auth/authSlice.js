import { createSlice } from '@reduxjs/toolkit';
import {
  getUserThunk,
  loginThunk,
  logOutThunk,
  signUpThunk,
} from './authOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  isLoading: false,
  error: null,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(signUpThunk.rejected, handleRejected)

      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(getUserThunk.pending, handlePending)
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
      })
      .addCase(getUserThunk.rejected, handleRejected)
      .addCase(logOutThunk.pending, handlePending)
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.user = null;
      })
      .addCase(logOutThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
