import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ContactState } from '../../interfaces/ContactState'
import { addContactThunk, deleteContactThunk, fetchUsers } from './ActionCreators'
const initialState: ContactState = {
  contacts: [],
  isLoading: false,
  error: '',
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const contact = state.contacts.find((c) => c.id === action.payload)
      if (contact) {
        contact.isFavorite = !contact.isFavorite
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.contacts = action.payload
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Unknown error'
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload)
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts.filter((contact) => contact.id !== action.payload)
      })
  },
})

export const { toggleFavorite } = contactSlice.actions
