import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


const register = createAsyncThunk(
    'auth/register',
    async credentials => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            throw new Error(toast('An error create user. Try again!'));
        }
    },
);

const logIn = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;

        } catch (error) {
            throw new Error(toast('Invalid email or password! Try again!'));
        }
    },
);

const logOut = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            const { data } = await axios.post('/users/logout');
            token.unset();
            return data;
        } catch (error) {
           throw new Error(toast('An error has occurred. Try again.'));
        }
    },
);

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const {data} = await axios.get('/users/current');
            return data;
        } catch (error) {

        }
        
        
    }
);

const operations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};
export default operations;