import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { BsFillPencilFill, BsXLg } from "react-icons/bs";
import Notiflix from 'notiflix';



const ContactListItem = ({ data, deleteContact }) => {
    const { name, number, id } = data
    return (
        <tr>
            <td>{name}</td>
            <td>{number}</td>
            <td>
                <Button variant="outline-warning" size="sm" type='button'onClick={() => Notiflix.Notify.info(`Sorry, this action is not yet available`)}><BsFillPencilFill /></Button>
                <Button variant="outline-danger" size="sm" onClick={() => deleteContact(id)} type='button'><BsXLg/></Button>
            </td>
        </tr>)
};


export default ContactListItem;


ContactListItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired       
        })    
};
