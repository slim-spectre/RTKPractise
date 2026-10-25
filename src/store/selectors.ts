import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";


const selectContactsState = (state: RootState) => state.contact.contacts;

export const selectContactsStats = createSelector(
  [selectContactsState],
  (contacts) => ({
    total: contacts.length,
    favorites: contacts.filter(c => c.isFavorite).length
  })
);