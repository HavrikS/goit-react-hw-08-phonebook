import React, { Component } from 'react'
import css from 'components/ContactForm/ContactForm.module.css'

class ContactForm extends Component {

state = {    
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
    this.props.onSubmit(this.state)
    this.setState({
        name: '',
        number: ''
    });
};


render() {     
return (   
    <form className={css.contactForm} onSubmit={this.handleSubmit}>
        <label className={css.contactLabel}>
        Name
        <input
            className={css.contactInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
        />
        </label>
        <label className={css.contactLabel}>
        Number
            <input
            className={css.contactInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
        />
        </label>
        <button className={css.contactButton} type="submit">Add contact</button>
    </form>        
);
}
}


export default ContactForm;