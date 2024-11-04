import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/fiter';
import { contactsReducer } from './slices/contacts';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});
