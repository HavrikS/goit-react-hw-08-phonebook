import React, { useRef } from 'react'
import { addFilter } from '../../redux/actions';
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from '../../redux/selectors';
import css from 'components/Filter/Filter.module.css'




const Filter = () => {

    const reduxFilter = useSelector(getFilter); 
    const dispatch = useDispatch()

    const handleChangeFilter = event => {
        const { value } = event.target;
        dispatch(addFilter(value))   
    }

    const inputEl = useRef(null);
    return (
    <label className={css.filterLabel}>
    Find contacts by name
        <input
            className={css.filterInput}
            type="text"
            name="filter"
            value={reduxFilter}
            ref={inputEl}
            onChange={handleChangeFilter}
        />
    </label>
)}

export default Filter;