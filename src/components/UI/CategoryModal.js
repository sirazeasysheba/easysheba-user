import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import close from "../../media/x-converted.png";
const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "1000px",
    minHeight: "500px",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    padding: 0,
    zIndex: 1000,
    background: "#fff",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
};

const buttonStyles = {
  position: "absolute",
  top: "-23px",
  right: "-35px",
  border: "none",
  background: "transparent",
  zIndex: "10001",
};
Modal.setAppElement("#root");
const CategoryModal = ({ modalIsOpen, closeModal }) => {
  const category = useSelector((state) => state.category);
  return (
    <div className="cart-modal">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <button onClick={closeModal} style={buttonStyles}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="m-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  {category.categories?.map((cat, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={`${cat._id}`}>{cat.name}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {category.categories?.map((cat, index) => (
                    <Tab.Pane eventKey={`${cat.name}`} key={index}>
                      <p>{cat.children.name}</p>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryModal;
