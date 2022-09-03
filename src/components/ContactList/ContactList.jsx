import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteStoreContact } from '../../redux/actions';
import { getFilter, getContacts } from '../../redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem'
import css from 'components/ContactList/ContactList.module.css'




const ContactList = () => {
    
    const reduxContacts = useSelector(getContacts);
    const reduxFilter = useSelector(getFilter);
    const dispatch = useDispatch()

    const getVisibleContacts = () => {    
        const normalizedFilter = reduxFilter.toLowerCase();
        return reduxContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    }

    const deleteContact = Id => {   
        dispatch(deleteStoreContact(Id))
    };

    const visibleContacts = getVisibleContacts()

    return (
    <ul className={css.contactList}>
        {visibleContacts.map((visibleContact) =>
            <ContactListItem key={visibleContact.id} data={visibleContact} deleteContact={deleteContact} />)}
    </ul>
)}

export default ContactList;

