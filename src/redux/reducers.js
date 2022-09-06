import { createReducer,  combineReducers } from '@reduxjs/toolkit'
import { addContact, deleteStoreContact, addFilter } from './actions';


const itemsReducer = createReducer([], {
    [addContact]: (state, action) => [action.payload, ...state],
    [deleteStoreContact]: (state, action) => state.filter(contact => contact.id !== action.payload),//     
})

const filterReducer = createReducer('', {
    [addFilter]: (state, action) => state = action.payload,
})

const rootReducer = combineReducers({ 
    items: itemsReducer,
    filter: filterReducer,  
});

export default rootReducer;



