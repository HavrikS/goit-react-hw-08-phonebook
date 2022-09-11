import React from 'react'
import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact, fetchContacts } from '../../redux/operations';
import { getFilter, getContacts } from '../../redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem'
import css from 'components/ContactList/ContactList.module.css'




const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchContacts())        
    }, [dispatch]);
    
    const reduxContacts = useSelector(getContacts);    
    const reduxFilter = useSelector(getFilter);      

    const getVisibleContacts = () => {
        const normalizedFilter = reduxFilter.toLowerCase();        
        return reduxContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    }

    const deleteContact = Id => {   
        dispatch(removeContact(Id))
    };

    const visibleContacts = getVisibleContacts()

    return (
    <ul className={css.contactList}>
        {visibleContacts.map((visibleContact) =>
            <ContactListItem key={visibleContact.id} data={visibleContact} deleteContact={deleteContact} />)}
    </ul>
)}

export default ContactList;

