import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
// import actions from "./contacts-actions";

 axios.defaults.baseURL = 'https://619266d1aeab5c0017105fd2.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContact = createAsyncThunk(
    'contacts/fetchContact',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', { name, number });
            console.log('data', data);
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);

const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async ( id, { rejectWithValue }) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (err) {
            rejectWithValue({ error: err.message });
        }
    },
);

export default { addContact, deleteContact, fetchContact };

// const deleteContact = id => dispatch => {
//     dispatch(actions.deleteContactRequest());

//     axios
//         .delete(`/contacts/${id}`)
//         .then(() => dispatch(actions.deleteContactSuccess(id)))
//         .catch(error => dispatch(actions.deleteContactError(error)));
// }

// const addContact = (name, phone) => dispatch => {
//     const contact = { name, phone };

//     dispatch(actions.addContactRequest());

//     axios
//         .post('/contacts', contact)
//         .then(({ data }) => dispatch(actions.addContactSuccess(data)))
//         .catch(error => dispatch(actions.addContactError(error)));
// };


// const fetchContact = () => async dispatch => {
//     dispatch(fetchContactRequest());

//     try {
//         const { data } = await axios.get('/contacts');
//         dispatch(fetchContactSuccess(data));
//     } catch (error) {
//         dispatch(fetchContactError(error))
//     }
//     // axios
//     //     .get('/contacts')
//     //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     //     .catch(error => dispatch(fetchContactError(error)));
// }


