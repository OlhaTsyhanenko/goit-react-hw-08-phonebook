import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction('contacts/addContactsRequest');
const addContactSuccess = createAction('contacts/addContactsSuccess');
const addContactError = createAction('contacts/addContactsError');

const deleteContactRequest = createAction('contacts/deleteContactsRequest');
const deleteContactSuccess = createAction('contacts/deleteContactsSuccess');
const deleteContactError = createAction('contacts/deleteContactsError');

const changeFilter = createAction('contacts/filter');

export default {addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, changeFilter}
