import { createSlice } from "@reduxjs/toolkit";

import { register, logOut, logIn, fetchCurrentUser, } from "./auth-operation";

const initialState = {
    user: {},
    isLogin: false,
    token: '',
    loading: false,
    error: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: state => {
            state.loading = true;
            state.error = null;
        },
        [register.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
            state.error = null;
        },
        [register.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [logIn.pending]: state => {
            state.loading = true;
            state.error = null;
        },
        [logIn.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
            state.error = null;
        },
        [logIn.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload.message;
        },
        [logOut.pending]: state => {
            state.loading = true;
            state.error = null;
        },
        [logOut.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = {};
            state.token = '';
            state.isLogin = false;
            state.error = null;
        },
        [logOut.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [fetchCurrentUser.pending]: state => {
            state.loading = true;
            state.error = null;
        },
        [fetchCurrentUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload;
            state.isLogin = true;
            state.error = null;
        },
        [fetchCurrentUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export default authSlice.reducer;