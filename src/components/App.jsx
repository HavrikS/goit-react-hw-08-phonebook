import React, { Component } from 'react'
import  ContactForm  from './ContactForm/ContactForm';
import css from 'components/App.module.css'



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
    this.setState({ contacts:  data })
  }

  render() {     
    return (      
      <div className={css.container}>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
              type="text"
              name="filter"             
              value={this.state.filter}
              onChange={this.handleChangeFilter}
            />
        <ul>
          {(this.state.contacts).filter(contact => contact.name.toLowerCase()
            .includes(this.state.filter.toLowerCase()))
            .map((contact) => <li key={contact.id}>{contact.name}: {contact.number}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
