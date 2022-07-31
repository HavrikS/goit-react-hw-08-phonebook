import React from 'react'
import PropTypes from 'prop-types';



const ContactListItem = ({ data, onDeleteContact }) => {
    const { name, number, id } = data
    return (<li>
        <p>{name}: {number}</p>
        <button onClick={() => onDeleteContact(id)} type='button'>Delete</button>
    </li>)
};

export default ContactListItem;


ContactListItem.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired       
        })    
};
