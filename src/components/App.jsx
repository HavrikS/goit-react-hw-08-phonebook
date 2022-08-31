import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteStoreContact, addFilter, addLocalContact } from '../redux/store';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import  ContactList  from './ContactList/ContactList';
import css from 'components/App.module.css'
import { nanoid } from 'nanoid'



const App = () => {

  const reduxContacts = useSelector(state => state.contacts.items);
  const reduxFilter = useSelector(state => state.contacts.filter);
  console.log(reduxContacts);
  const dispatch = useDispatch()
  
  
  const handleChangeFilter = event => {
    const { value } = event.target;
    dispatch(addFilter(value))   
  }

  const formSubmitHendler = data => {  
    const { name, number } = data;
    if (reduxContacts.find(contact => contact.name === name)) {
      alert(`${name} is alreadi in contacts.`);
    } else
    {const newContacts = {
        id: nanoid(),
        name: name,
        number: number        
    }; 
      dispatch(addContact(newContacts))    
    ;}    
  }

  const deleteContact = contactId => {   
    dispatch(deleteStoreContact(contactId))
  };


  const getVisibleContacts = () => {    
    const normalizedFilter = reduxFilter.toLowerCase();
    return reduxContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }



  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);
    if (parsedContacts) {
      dispatch(addLocalContact(parsedContacts))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {    
    localStorage.setItem('contacts', JSON.stringify(reduxContacts));    
  }, [reduxContacts]);


  const visibleContacts = getVisibleContacts()
  
    return (      
      <div className={css.container}>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={formSubmitHendler} />
        <h2>Contacts</h2>
        <Filter value={reduxFilter} onChange={handleChangeFilter} />
        <ContactList options={visibleContacts} onDeleteContact={deleteContact} />
      </div>
    );
  }


export default App;
