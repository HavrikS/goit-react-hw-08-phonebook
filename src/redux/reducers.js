import { createReducer,  combineReducers } from '@reduxjs/toolkit'
import { ADD_CONTACTS, DELETE_CONTACTS, ADD_FILTER } from './types';


const itemsReducer = createReducer([], {
    [ADD_CONTACTS]: (state, action) => [action.payload, ...state],
    [DELETE_CONTACTS]: (state, action) => state.filter(contact => contact.id !== action.payload),//     
})

const filterReducer = createReducer('', {
    [ADD_FILTER]: (state, action) => state = action.payload,
})

const rootReducer = combineReducers({ 
    items: itemsReducer,
    filter: filterReducer,  
});

export default rootReducer;



// export const addContact = createAction('items/addContact');
// export const deleteStoreContact = createAction('items/deleteStoreContact');
// export const addFilter = createAction('filte/addFilter');