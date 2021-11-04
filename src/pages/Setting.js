import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PasswordSettingModal from "../components/UI/PasswordSettingModal";
import TextField from "../components/UI/TextField";

const Setting = () => {
  const validate = Yup.object({
    oldPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Previous Password is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New Password is required"),
    confirmPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Confirm Password is required"),
  });
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => {
    setModalShow(false);
  };

  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Container>
        <Breadcrumb className="bread">
          <Breadcrumb.Item>
            {" "}
            <Link
              to="/"
              className="breadcrumb-item text-decoration-none"
              style={{ color: "#333333" }}
            >
              Home
            </Link>{" "}
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {" "}
            <Link
              to="/profile"
              className="breadcrumb-item text-decoration-none"
              style={{ color: "#333333" }}
            >
              Profile
            </Link>{" "}
          </Breadcrumb.Item>

          <Breadcrumb.Item active className="text-dark fw-bold">
            {" "}
            Setting
          </Breadcrumb.Item>
        </Breadcrumb>
        <h5 className="mb-5 text-center fw-bold">User Account Setting</h5>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <div className="my-3 d-flex justify-content-between">
              <Link to="/profile">
                {" "}
                <button className="change-btn">
                  <FontAwesomeIcon icon={faEdit} /> Profile Information Setting
                </button>{" "}
              </Link>
              <button className="change-btn" onClick={handleShow}>
                <FontAwesomeIcon icon={faEdit} /> Change Password
              </button>
            </div>
          </Col>
        </Row>

        <PasswordSettingModal
          modalShow={modalShow}
          handleClose={handleClose}
          title={"Setting Password"}
        >
          <Formik
            initialValues={{
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              const user = values;
              console.log(user);
            }}
          >
            {(formik) => (
              <div className="mb-2 form-wrapper px-2">
                <div>
                  <div className="d-flex justify-content-center">
                    <Form>
                      <Row>
                        <Col md={6} style={{ width: 300 }}>
                          <TextField
                            label="Old Password"
                            type="password"
                            placeholder="******"
                            name="oldPassword"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} style={{ width: 300 }}>
                          <TextField
                            label="New Password"
                            type="password"
                            placeholder="******"
                            name="newPassword"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} style={{ width: 300 }}>
                          <TextField
                            label="Confirm Password"
                            type="password"
                            placeholder="******"
                            name="confirmPassword"
                          />
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </PasswordSettingModal>
      </Container>
    </div>
  );
};

export default Setting;
