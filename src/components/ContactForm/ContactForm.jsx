import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Notiflix from 'notiflix';


const ContactForm = () => {

    
    const reduxContacts = useSelector(getContacts);    
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'number':
                return setPhone(value);
            default:
                return;
        }
    };

    
    const formSubmitHendler = ()  => {
        if (reduxContacts.find(contact => contact.name === name)) {
        Notiflix.Notify.failure(`${name} is alreadi in contacts.`);
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

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} name="name" placeholder="Enter name" onChange={handleChange} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required/>
                <Form.Text className="text-muted">
                    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" value={phone} name="number" placeholder="Enter phone" onChange={handleChange} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" required/>
                <Form.Text className="text-muted">
                    "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                </Form.Text>
            </Form.Group>
            <Button variant="outline-success" type="submit">
                Add contact
            </Button>
        </Form>
    );
};


export default ContactForm;


        // <form className={styles.contactForm} onSubmit={handleSubmit}>
        //     <label className={styles.contactLabel}>
        //         Name
        //         <input
        //             className={styles.contactInput}
        //             type="text"
        //             name="name"
        //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //             required
        //             value={name}
        //             ref={inputName}
        //             onChange={handleChangeName}
        //         />
        //     </label>
        //     <label className={styles.contactLabel}>
        //         Number
        //         <input
        //             className={styles.contactInput}
        //             type="tel"
        //             name="number"
        //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //             required
        //             value={phone}
        //             ref={inputPhone}
        //             onChange={handleChangeNumber}
        //         />
        //     </label>            
        //     <button className={styles.contactButton} type="submit">Add contact</button>
        //     </form>