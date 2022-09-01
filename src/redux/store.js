import { configureStore, createReducer, createAction } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH,  REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


export const addContact = createAction('items/addContact');
export const deleteStoreContact = createAction('items/deleteStoreContact');
export const addFilter = createAction('filte/addFilter');

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items']
}

const initial = {
    items: [],
    filter: ''
}

const contactsReducer = createReducer(initial, {
    [addContact]: (state, action) => ({ ...state, items: [action.payload, ...state.items]}),
    [deleteStoreContact]: (state, action) => ({...state, items: state.items.filter(contact => contact.id !== action.payload)}),    
    [addFilter]: (state, action) => ({ ...state, filter: action.payload }),
})

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {        
        contacts: persistedReducer,        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store)

////////......another way

// const itemsReducer = createReducer([], {
//     [addContact]: (state, action) => [action.payload, ...state],
//     [deleteStoreContact]: (state, action) => state.filter(contact => contact.id !== action.payload),//     
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

