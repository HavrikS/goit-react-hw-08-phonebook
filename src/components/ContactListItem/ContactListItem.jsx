import React from 'react'
import { useDispatch } from "react-redux";
import { removeContact } from '../../redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { BsFillPencilFill, BsXLg } from "react-icons/bs";
import PatchContactModal from '../PatchContactModal/PatchContactModal'
import styles from './ContactListItem.module.css';



const ContactListItem = ({ data }) => {

    const [modalShow, setModalShow] = React.useState(false);

    const dispatch = useDispatch();
    const { name, number, id } = data

    const deleteContact = Id => {
        dispatch(removeContact(Id))
    };


    
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{number}</td>
                <td>
                    <Button className={styles.putchButton} variant="outline-warning" id={id} size="sm" type='button' onClick={() => setModalShow(true)}><BsFillPencilFill /></Button>
                    <Button variant="outline-danger" size="sm" onClick={() => deleteContact(id)} type='button'><BsXLg /></Button>
                </td>
            </tr>
            <PatchContactModal
                data={data}
                show={modalShow}                
                onHide={() => setModalShow(false)}
            />
        </>
    )
};


export default ContactListItem;


ContactListItem.propTypes = {
    data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired       
        })    
};
