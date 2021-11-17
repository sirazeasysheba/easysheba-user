import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ServiceModal = (props) => {
  return (
    <div className="service-modal">
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
          <button className="request-btn" onClick={props.handleClose}>
            REQUEST SERVICE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ServiceModal;
