import React, { Component } from 'react'
import { nanoid } from 'nanoid'

class ContactForm extends Component {

state = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],    
    name: '',
    number: ''
};

handleChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

handleSubmit = event => {
    event.preventDefault();
    
    this.state.contacts.push({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number
    });
    this.props.onSubmit(this.state.contacts)
    this.setState({
        name: '',
        number: ''
    });
};


render() {     
return (   
    <form onSubmit={this.handleSubmit}>
        <label>
        Name
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
        />
        </label>
        <label>
        Number
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
        />
        </label>
        <button type="submit">Add contact</button>
    </form>        
);
}
}


export default ContactForm;