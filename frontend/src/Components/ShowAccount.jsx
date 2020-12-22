import React ,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';

const ShowAccount = (props) => {
      const [login , setLogin] =useState(true);
      const [show, setShow] = useState(true);


      const handleClose = () => {setShow(false) ; props.handleAccount()};
   
    return (
      <Modal show={show} onHide={handleClose}  >
        {login ?
          (
          <>
            <Modal.Header closeButton>
              <Modal.Title>SignUp here!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <SignUp />
            </Modal.Body>

            <Modal.Footer>
              <button variant="primary" onClick = {() => {setLogin(!login)}}>Already have Account</button>
            </Modal.Footer>
          </>
          ):
          (
          <>
            <Modal.Header closeButton>
              <Modal.Title>SignIn here!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <SignIn />
            </Modal.Body>
            <Modal.Footer>
              <button variant="primary" onClick = {() => {setLogin(!login)}}>Go Back</button>
            </Modal.Footer>
          </>
          )
        }
      </Modal>

    );
}

export default ShowAccount;
