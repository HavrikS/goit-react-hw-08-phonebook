import React from 'react'
import ContactListItem from 'components/ContactListItem/ContactListItem'
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css'

const ContactList = ({options, onDeleteContact}) => (
    <ul className={css.contactList}>
        {options.map((option) =>
            <ContactListItem key={option.id} data={option} onDeleteContact={onDeleteContact} />)}
    </ul>
)

export default ContactList;

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    options:  PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired       
        })
    )
};
