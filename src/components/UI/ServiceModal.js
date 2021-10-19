import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

const ServiceModal = (props) => {
  return (
    <Modal
      show={props.modalShow}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <p id="contained-modal-title-vcenter" className="modal-header">
          {props.title}
        </p>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer className="mx-auto">
        <button className="request-btn" onClick={props.handleClose}>
          REQUEST SERVICE
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ServiceModal;
