import {createSlice} from '@reduxjs/toolkit';
import {addContact, deleteContact, fetchContacts, updateContact} from '../contacts/operations.js';

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(addContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
                state.loading = false;
            })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(updateContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex(contact => contact.id === action.payload.id)
                if (index !== -1) {
                    state.items[index] = action.payload;
                } 
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; 
            })
    },
});

export default contactsSlice.reducer;