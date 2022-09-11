import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts-slice';
import filterReducer from './reducers';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})


export default store;

