import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkApi) => {
        try {
            const res = await axios.post("/users/signup", credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (userInfo, thunkApi) => {
        try {
            const res = await axios.post("/users/login", userInfo);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async (_, thunkApi) => {
        try {
            await axios.post("/users/logout");
            clearAuthHeader();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);