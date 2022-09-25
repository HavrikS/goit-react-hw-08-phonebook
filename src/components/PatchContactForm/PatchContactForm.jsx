import { useState } from 'react'
import { useDispatch } from "react-redux";
import { patchContact } from '../../redux/contacts/contacts-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const PatchContactForm = (props) => {


    const dispatch = useDispatch()

    const { number, id } = props.data



    const [name, setName] = useState(props.data.name);
    const [phone, setPhone] = useState(number);

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

    
    const formSubmitHendler = (id)  => {
        const newContact = {            
            name: name,
            number: phone        
        };
        const data = {
            newContact: newContact,
            id: id
        }
        dispatch(patchContact(data))          
    }

    const handleSubmit = (event, id) => {
        event.preventDefault();
        formSubmitHendler(id);
        setName('');
        setPhone('');
    };



    return (

        <Form  onSubmit={(event) => handleSubmit(event, id)}>
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
            <Button  onClick={() => props.onHide()} variant="outline-success" type="submit">
                Patch contact
            </Button>
        </Form>
    );
};


export default PatchContactForm;