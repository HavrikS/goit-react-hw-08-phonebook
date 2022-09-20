import {createSlice, combineReducers} from "@reduxjs/toolkit";

import { fetchContacts, addContact, removeContact, patchContact} from "./contacts-operations";

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    extraReducers: {
        [fetchContacts.fulfilled]: (_, {payload}) => payload,
        [addContact.fulfilled]: (store, {payload}) => [...store, payload],
        [removeContact.fulfilled]: (store, { payload }) => store.filter(item => item.id !== payload),
        [patchContact.fulfilled]: (store, { payload }) => [...store.filter(item => item.id !== payload.id), payload],        
    }
});

const loadingSlice = createSlice({
    name: "loading",
    initialState: false,
    extraReducers: {
        [fetchContacts.pending]: () => true,
        [fetchContacts.fulfilled]: () => false,
        [fetchContacts.rejected]: () => false,
        [addContact.pending]: () => true,
        [addContact.fulfilled]: () => false,
        [addContact.rejected]: () => false,
        [removeContact.pending]: () => true,
        [removeContact.fulfilled]: () => false,
        [removeContact.rejected]: () => false,
        [patchContact.pending]: () => true,
        [patchContact.fulfilled]: () => false,
        [patchContact.rejected]: () => false,
    }
});

const errorSlice = createSlice({
    name: "error",
    initialState: null,
    extraReducers: {
        [fetchContacts.pending]: () => null,
        [fetchContacts.rejected]: (_, {payload}) => payload,
        [addContact.pending]: () => null,
        [addContact.rejected]: (_, {payload}) => payload,
        [removeContact.pending]: () => null,
        [removeContact.rejected]: (_, { payload }) => payload,
        [patchContact.pending]: () => null,
        [patchContact.rejected]: (_, {payload}) => payload,
    }
});

const contactsReducer = combineReducers({
    items: itemsSlice.reducer,
    loading: loadingSlice.reducer,
    error: errorSlice.reducer,
})

export default contactsReducer;