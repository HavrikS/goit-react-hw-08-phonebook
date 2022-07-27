import React, { Component } from 'react'
import css from 'components/App.module.css'
import { nanoid } from 'nanoid'


export class App extends Component {
  
  state = {
  contacts: [],
  name: ''
}

  handleChange = event => {
    this.setState({
      contacts: nanoid(),
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      name: ''
    });
  };
  


  render() {
    const { name } = this.state
    console.log(this.state);
    return (      
      <div className={css.container}>
        <h2>Phonebook</h2> 
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <p>Contacts</p>
      </div>
    );
  }
}

export default App;
