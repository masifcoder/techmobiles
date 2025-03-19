import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API base URL
const API_URL = `${import.meta.env.VITE_SERVER_API_URL}/api/user`;

// Thunk for login
export const loginUser = createAsyncThunk('authSlice/login', async (credentials, { rejectWithValue }) => {
    try {

        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data || 'Login failed. Please try again.');

    }
});

// Signup
export const signupUser = createAsyncThunk("authSlice/signup", async (data, { rejectWithValue }) => {
    try {

        const response = await axios.post(`${API_URL}/signup`, data);
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data || 'Sginup failed. Please try again.');

    }
});


const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        isLogin: false,
        loading: false,
        errors: null,
        token: null,
        user: null
    },
    reducers: {
        logout: (state) => {
            state.isLogin = false;
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.isLogin = false;
                state.errors = null;
                state.token = null;
                state.user = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.errors = null;
                state.isLogin = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isLogin = false;
                state.errors = action.payload.errors;
                state.token = null;
                state.user = null;
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.isLogin = false;
                state.errors = null;
                state.token = null;
                state.user = null;
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.loading = false;
                state.errors = null;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.isLogin = false;
                state.errors = action.payload.errors;
                state.token = null;
                state.user = null;
            })
    }
});


export const { logout } = authSlice.actions
export default authSlice.reducer