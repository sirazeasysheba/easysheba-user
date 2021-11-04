import React from "react";
import { Modal, Button } from "react-bootstrap";

const PasswordSettingModal = (props) => {
  return (
    <div>
      <Modal
        show={props.modalShow}
        onHide={props.handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <p id="contained-modal-title-vcenter" className="modal-header">
            {props.title}
          </p>
          <button
            type="button"
            className="modal-btn"
            onClick={props.handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer className="mx-auto">
          <Button
            className="w-100 fw-medium shadow-none bg-success mt-2"
            onClick={props.handleClose}
          >
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PasswordSettingModal;
