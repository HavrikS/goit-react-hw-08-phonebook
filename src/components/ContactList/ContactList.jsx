import React from 'react'
import Loader from 'components/Loader/Loader'
import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact, fetchContacts } from '../../redux/contacts/contacts-operations';
import { getContacts, getLoading } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem'
import styles from 'components/ContactList/ContactList.module.css'




const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchContacts())        
    }, [dispatch]);
    
    const reduxContacts = useSelector(getContacts);    
    const reduxFilter = useSelector(getFilter); 
    const loading = useSelector(getLoading);

    const getVisibleContacts = () => {
        const normalizedFilter = reduxFilter.toLowerCase();        
        return reduxContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    }

    const deleteContact = Id => {   
        dispatch(removeContact(Id))
    };

    const visibleContacts = getVisibleContacts()
     

    return (
        <>{loading && <Loader/>}
    <ul className={styles.contactList}>
        {visibleContacts.map((visibleContact) =>
            <ContactListItem key={visibleContact.id} data={visibleContact} deleteContact={deleteContact} />)}
            </ul>
            </>
)}

export default ContactList;

