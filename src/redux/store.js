import { configureStore, createReducer, createAction } from '@reduxjs/toolkit'


export const addContact = createAction('items/addContact');
export const deleteStoreContact = createAction('items/deleteStoreContact');
export const addLocalContact = createAction('items/addLocalContact');
export const addFilter = createAction('filte/addFilter');

const initial = {
    items: [],
    filter: ''
}

const contactsReducer = createReducer(initial, {
    [addContact]: (state, action) => state = ({ ...state, items: [action.payload, ...state.items]}),
    [deleteStoreContact]: (state, action) => state = ({...state, items: state.items.filter(contact => contact.id !== action.payload)}),
    [addLocalContact]: (state, action) => state = ({ ...state, items: [...action.payload, ...state.items]}),
    [addFilter]: (state, action) => state = ({ ...state, filter: action.payload }),
})


export const store = configureStore({
    reducer: {        
        contacts: contactsReducer,        
    },
})

// const itemsReducer = createReducer([], {
//     [addContact]: (state, action) => [action.payload, ...state],
//     [deleteStoreContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
//     [addLocalContact]: (state, action) => [...action.payload, ...state],
// })

// const filterReducer = createReducer('', {
//     [addFilter]: (state, action) => state = action.payload,
// })


// export const store = configureStore({
//     reducer: {
//         items: itemsReducer,
//         filter: filterReducer,
//     },
// })

