import { createReducer } from '@reduxjs/toolkit'
import { addFilter } from './actions';



const filterReducer = createReducer('', {
    [addFilter]: (state, action) => state = action.payload,
})


export default filterReducer;



