import { createReducer } from '@reduxjs/toolkit'
import { addFilter } from './filter-actions';



const filterReducer = createReducer('', {
    [addFilter]: (state, action) => state = action.payload,
})


export default filterReducer;



