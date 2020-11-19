import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InventoryAccordion.scss'
import './addSkidModal.scss';

// TODO: will need to make an API call to this ---> DB <---
import getAllOpenSkids from '../mock-db/mock-db';

import {
  Modal,
  Button
} from 'react-bootstrap';


function AddSkidModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="add--skid--btn" variant="primary" onClick={handleShow}>
        Add Skid
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h2>Add Skid</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <table>
            <tbody>
              <tr>
                <td>Box Quantity</td>
                <td><input type="number" placeholder=""/></td>
              </tr>
              <tr>
                <td>Supplier</td>
                <td><input type="text" placeholder=""/></td>
              </tr>
              <tr>
                <td>Origin Country</td>
                <td><input type="text" placeholder=""/></td>
              </tr>
              <tr>
                <td>Some Number</td>
                <td><input type="text" placeholder=""/></td>
              </tr>
              <tr>
                <td>Rank Lot#</td>
                <td><input type="text" placeholder=""/></td>
              </tr>
              <tr>
                <td>Arrival Date</td>
                <td><input type="date" placeholder=""/></td>
              </tr>
              <tr>
                <td>Rank QC Report</td>
                <td><input type="text" placeholder=""/></td>
              </tr>
            </tbody>
          </table>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create Skid
            {/* Use "Save Changes" for the edit skid component */}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddSkidModal;