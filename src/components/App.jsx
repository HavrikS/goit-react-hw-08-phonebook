import { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import  ContactList  from './ContactList/ContactList';
import css from 'components/App.module.css'
import { nanoid } from 'nanoid'



const App = () => {

const [contacts, setContacts] = useState([]);
const [filter, setFilter] = useState('');
  
  const handleChangeFilter = event => {
    const { value } = event.target;
    setFilter(value)
  }

  const formSubmitHendler = data => {  
    const { name, number } = data;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is alreadi in contacts.`);
    } else
    {const newContacts = {
        id: nanoid(),
        name: name,
        number: number
    };      
    setContacts(prevState => ([newContacts, ...prevState]))
    ;}    
  }

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  };


  const getVisibleContacts = () => {    
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }



  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);    
    if (parsedContacts) {
      setContacts(parsedContacts)
    }
  }, []);


  useEffect(() => {
    if (contacts.length > 0) {
    localStorage.setItem('contacts', JSON.stringify(contacts)); }   
  }, [contacts]);


const visibleContacts = getVisibleContacts()

    return (      
      <div className={css.container}>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={formSubmitHendler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList options={visibleContacts} onDeleteContact={deleteContact} />
      </div>
    );
  }


export default App;
