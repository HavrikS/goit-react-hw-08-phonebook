import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import  ContactList  from './ContactList/ContactList';
import css from 'components/App.module.css'
import { nanoid } from 'nanoid'



class App extends Component {
  
  state = {
  contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
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
    const newContacts = {
        id: nanoid(),
        name: name,
        number: number
    };
    this.setState(prevState => ({
        contacts: [newContacts, ...prevState.contacts]
    }) );    
  }


  getVisibleContacts = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase()
            .includes(normalizedFilter))
  }

  render() {     

    const visibleContacts = this.getVisibleContacts()

    return (      
      <div className={css.container}>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList options={visibleContacts}/>
      </div>
    );
  }
}

export default App;
