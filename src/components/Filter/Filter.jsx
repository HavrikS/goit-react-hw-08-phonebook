import React from 'react'
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
    <label>
    Find contacts by name
    <input
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
        />
    </label>
)

export default Filter;

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};