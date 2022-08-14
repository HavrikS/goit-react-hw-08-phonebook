import React, {useRef} from 'react'
import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css'

const Filter = ({ value, onChange }) => {
    const inputEl = useRef(null);
    return (
    <label className={css.filterLabel}>
    Find contacts by name
        <input
            className={css.filterInput}
            type="text"
            name="filter"
            value={value}
            ref={inputEl}
            onChange={onChange}
        />
    </label>
)}

export default Filter;

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};