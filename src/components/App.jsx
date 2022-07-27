import React, { Component } from 'react'
import css from 'components/App.module.css'


export class App extends Component {
  
  state = {
  contacts: [],
  name: ''
}

  // handleChange = event => {
  //   const { name } = event.currentTarget;


  // };

  // handleSubmit = event => {
  //   const { name } = event.currentTarget;

  // };


  render() {
    const {name} = this.state.name
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
