import React from 'react'
import ContactListItem from 'components/ContactListItem/ContactListItem'


const ContactList = ({options}) => (
    <ul>
        {options.map((contact) => <ContactListItem  key={contact.id} data={contact} />)}
    </ul>
)

export default ContactList;

