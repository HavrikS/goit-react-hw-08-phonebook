import React from 'react'
import PropTypes from 'prop-types';
import css from 'components/ContactListItem/ContactListItem.module.css'


const ContactListItem = ({ data, deleteContact }) => {
    const { name, phone
, id } = data
    return (<li>
        <div className={css.contactListItem}>
        <p>{name}: {phone
}</p>
            <button className={css.contactListButton} onClick={() => deleteContact(id)} type='button'>Delete</button>
            </div>
    </li>)
};

export default ContactListItem;


ContactListItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired       
        })    
};
