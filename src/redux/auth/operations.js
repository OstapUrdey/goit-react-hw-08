import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {setAuthHeader, clearAuthHeader} from '../config.js';

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkApi) => {
        try {
            const res = await axios.post("/users/signup", credentials);
            console.log("API response:", res.data);
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

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        setAuthHeader(state.auth.token);
        const res = await axios.get("/user/me");
        return res.data;
    },
    {
        condition: (_, thunkApi) => {
            const state = thunkApi.getState();
            return state.auth.token !== null;
        },
    }
)