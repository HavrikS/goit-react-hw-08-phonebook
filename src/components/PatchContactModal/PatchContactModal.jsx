// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PatchContactForm from '../PatchContactForm/PatchContactForm';

function PatchContactModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          To change a contact, fill in all fields
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
              <PatchContactForm onHide={props.onHide} contactId={props.contactid} />
      </Modal.Body>
    </Modal>
  );
};


export default PatchContactModal;
