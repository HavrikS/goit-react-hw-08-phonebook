import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/auth-api";

export const register = createAsyncThunk(
    'user/signup',
    async (user, thunkApi) => {
        try {
            const data = await api.signup(user);
            return data;
        } catch ({ response }) {
            const { data } = response;
            const error = {
                status: data.status,
                message: data.statusText,
            }
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const logIn = createAsyncThunk(
    'user/login',
    async (user, thunkApi) => {
        try {
            const data = await api.login(user);
            return data;
        } catch ({ response }) {
            const { data } = response;
            const error = {
                status: data.status,
                message: data.statusText,
            }
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const logOut = createAsyncThunk(
    'user/logout',
    async (_, thunkApi) => {

        try {
            const data = await api.logout();
            return data;
        } catch ({ response }) {
            const { data } = response;
            const error = {
                status: data.status,
                message: data.statusText,
            }
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const fetchCurrentUser = createAsyncThunk(
    'user/current',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === '') {
            return thunkApi.rejectWithValue();
        }
        try {
            const { auth } = thunkApi.getState();
            const data = await api.current(auth.token);
            return data;
        } catch ({ response }) {
            const { data } = response;
            const error = {
                status: data.status,
                message: data.statusText,
            }
            return thunkApi.rejectWithValue(error);
        }
    }
);

const operations = {
    register,
    logOut,
    logIn,
    fetchCurrentUser,
};
export default operations;