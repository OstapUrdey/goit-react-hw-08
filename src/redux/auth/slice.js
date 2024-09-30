import {createSlice} from '@reduxjs/toolkit';
import {register} from '../contacts/operations.js';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfiled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
    }
})

export default authSlice.reducer;
