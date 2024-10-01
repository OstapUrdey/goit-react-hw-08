import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {setAuthHeader} from '../config.js';


export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setAuthHeader(token);
        try {
            const res = await axios.get("/contacts");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setAuthHeader(token);
        try {
            const res = await axios.post("/contacts", newContact);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setAuthHeader(token);
        try {
            const res = await axios.delete(`/contacts/${contactId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);