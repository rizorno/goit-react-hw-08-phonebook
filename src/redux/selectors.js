import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectToken = state => state.auth.token;
export const selectUserName = state => state.auth.user?.name;

export const selectSortContacts = createSelector([selectContacts], contacts => {
  return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
});

export const selectFindElementName = createSelector(
  [selectSortContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(element =>
      element.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFindElementNumber = createSelector(
  [selectSortContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(element => element.number.includes(filter));
  }
);
