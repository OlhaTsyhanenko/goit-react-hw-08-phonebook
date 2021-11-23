import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
import operations from "./contacts-operations";

const items = createReducer([], {
    [operations.fetchContact.fulfilled]: (_, { payload }) => payload,
    [operations.addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [operations.deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
    
})

const loading = createReducer(false, {
    [operations.fetchContact.pending]: () => true,
    [operations.fetchContact.fulfilled]: () => false,
    [operations.fetchContact.rejected]: () => false,
    [operations.addContact.pending]: () => true,
    [operations.addContact.fulfilled]: () => false,
    [operations.addContact.rejected]: () => false,
    [operations.deleteContact.pending]: () => true,
    [operations.deleteContact.fulfilled]: () => false,
    [operations.deleteContact.rejected]: () => false,
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})

export default combineReducers({
    items,
    filter,
    loading,
}) 