import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = "";
// };

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkApi) => {
        try {
            const res = await axios.post("/users/signup", credentials);
            setAuthHeader(res.token);
            return res.data.token;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);