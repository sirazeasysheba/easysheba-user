import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Player } from "video-react";

const MyModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Uploaded Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          className="custom-btn border-0 font-smaller shadow-none bg-brand-primary text-white rounded-2"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const VideoModal = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="custom-btn border-0 font-smaller shadow-none bg-brand-primary text-white rounded-2"
        onClick={() => setModalShow(true)}
      >
        {children}
      </Button>

      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default VideoModal;
