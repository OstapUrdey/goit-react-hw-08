import {createSlice} from '@reduxjs/toolkit';
import {logIn, register, logOut} from '../auth/operations.js';

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
            .addCase(register.fulfilled, (state, action) => {
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
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
            .addCase(logOut.fulfilled, () => {
                return initialState;
            })
    }
})

export default authSlice.reducer;
