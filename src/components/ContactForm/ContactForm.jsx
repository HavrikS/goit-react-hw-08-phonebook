import { useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import css from 'components/ContactForm/ContactForm.module.css'
import { nanoid } from 'nanoid'


const ContactForm = () => {

    
    const reduxContacts = useSelector(getContacts);    
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const inputName = useRef(null);
    const inputNumber = useRef(null);


    
    const handleChangeName = () => {        
        setName(inputName.current.value)
    };
    
    const handleChangeNumber = () => {
                setNumber(inputNumber.current.value)
    };
    
    const formSubmitHendler = ()  => {
        if (reduxContacts.find(contact => contact.name === name)) {
        alert(`${name} is alreadi in contacts.`);
        } else
        {const newContact = {
            id: nanoid(),
            name: name,
            number: number        
        }; 
        dispatch(addContact(newContact))    
        ;}    
    }

    const handleSubmit = event => {
        event.preventDefault();
        formSubmitHendler();
        setName('');
        setNumber('');
    };



    return (
        <form className={css.contactForm} onSubmit={handleSubmit}>
            <label className={css.contactLabel}>
                Name
                <input
                    className={css.contactInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    ref={inputName}
                    onChange={handleChangeName}
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
                    value={number}
                    ref={inputNumber}
                    onChange={handleChangeNumber}
                />
            </label>
            <button className={css.contactButton} type="submit">Add contact</button>
        </form>
    );
};


export default ContactForm;
