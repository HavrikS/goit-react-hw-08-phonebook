import React, { useRef } from 'react'
import { addFilter } from '../../redux/filter/filter-actions';
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from '../../redux/filter/filter-selectors';
import Form from 'react-bootstrap/Form';




const Filter = () => {

    const reduxFilter = useSelector(getFilter); 
    const dispatch = useDispatch()

    const handleChangeFilter = event => {
        const { value } = event.target;
        dispatch(addFilter(value))   
    }

    const inputEl = useRef(null);
    return (

        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Find contacts by name</Form.Label>
                <Form.Control type="text" value={reduxFilter} placeholder="Enter name" name="filter" ref={inputEl} onChange={handleChangeFilter} />               
            </Form.Group>

)}

export default Filter;