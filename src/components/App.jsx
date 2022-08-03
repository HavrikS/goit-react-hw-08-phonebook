import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import  ContactList  from './ContactList/ContactList';
import css from 'components/App.module.css'
import { nanoid } from 'nanoid'



class App extends Component {
  
  state = {
  contacts: [],
  filter: '',  
  }
  
  handleChangeFilter = event => {
    const { name, value } = event.target;
    this.setState({      
      [name]: value
    });
  }

  formSubmitHendler = data => {  
    const { name, number } = data;
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is alreadi in contacts.`);
    } else
    {const newContacts = {
        id: nanoid(),
        name: name,
        number: number
    };    
    this.setState(prevState => ({
        contacts: [newContacts, ...prevState.contacts]
    }));}    
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }


  getVisibleContacts = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase()
            .includes(normalizedFilter))
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {contacts} = this.state
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {     

    const visibleContacts = this.getVisibleContacts()

    return (      
      <div className={css.container}>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList options={visibleContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
