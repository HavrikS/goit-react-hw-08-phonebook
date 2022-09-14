import React, { useRef } from 'react'
import { addFilter } from '../../redux/filter/filter-actions';
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from '../../redux/filter/filter-selectors';
import styles from 'components/Filter/Filter.module.css'




const Filter = () => {

    const reduxFilter = useSelector(getFilter); 
    const dispatch = useDispatch()

    const handleChangeFilter = event => {
        const { value } = event.target;
        dispatch(addFilter(value))   
    }

    const inputEl = useRef(null);
    return (
    <label className={styles.filterLabel}>
    Find contacts by name
        <input
            className={styles.filterInput}
            type="text"
            name="filter"
            value={reduxFilter}
            ref={inputEl}
            onChange={handleChangeFilter}
        />
    </label>
)}

export default Filter;