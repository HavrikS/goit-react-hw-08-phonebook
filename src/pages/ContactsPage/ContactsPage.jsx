import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const ContactsPage = () => {


    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <h3>Add contacts</h3>
                    <ContactForm />
                </Col>
                <Col >
                    <h3>Contacts</h3>
                    <Filter />
                    <ContactList />
                </Col>
            </Row>
        </Container>
        
    )
};

export default ContactsPage;