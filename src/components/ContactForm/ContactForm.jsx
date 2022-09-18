import { useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import styles from 'components/ContactForm/ContactForm.module.css'


const ContactForm = () => {

    
    const reduxContacts = useSelector(getContacts);    
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const inputName = useRef(null);
    const inputPhone = useRef(null);


    
    const handleChangeName = () => {        
        setName(inputName.current.value)
    };
    
    const handleChangeNumber = () => {
                setPhone(inputPhone.current.value)
    };
    
    const formSubmitHendler = ()  => {
        if (reduxContacts.find(contact => contact.name === name)) {
        alert(`${name} is alreadi in contacts.`);
        } else
        {const newContact = {            
            name: name,
            number: phone        
        }; 
        dispatch(addContact(newContact))    
        ;}    
    }

    const handleSubmit = event => {
        event.preventDefault();
        formSubmitHendler();
        setName('');
        setPhone('');
    };



    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label className={styles.contactLabel}>
                Name
                <input
                    className={styles.contactInput}
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
            <label className={styles.contactLabel}>
                Number
                <input
                    className={styles.contactInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={phone}
                    ref={inputPhone}
                    onChange={handleChangeNumber}
                />
            </label>            
            <button className={styles.contactButton} type="submit">Add contact</button>
        </form>
    );
};


export default ContactForm;
