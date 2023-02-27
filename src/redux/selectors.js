import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectToken = state => state.auth.token;
export const selectUserName = state => state.auth.user?.name;

export const selectChange = state => state.change;

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
    const phone = String(parseInt(filter.replace(/[^\d]/g, '')));
    const result = contacts.filter(element => {
      const x = String(parseInt(element.number.replace(/[^\d]/g, '')));
      return x.includes(phone);
    });
    return result;
  }
);

export const selectChangeElement = createSelector(
  [selectContacts, selectChange],
  (contacts, change) => {
    const elementId = change.id;
    const result = contacts.find(contact => contact.id === elementId);
    return result;
  }
);
