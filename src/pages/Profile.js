import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Row,
  Form as Form2,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import EditProfileModal from "../components/UI/EditProfileModal";
import profile from "../media/dummy-profile-pic.jpg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/UI/TextField";
import ImageUploader from "../components/UI/ImageUploader";

const Profile = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    contactNumber: Yup.string()
      .required("Phone Number is required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(11, "Phone number is too short")
      .max(14, "Phone number is too long"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const [profileInfo, setProfileInfo] = useState({
    profile_image: [],
  });
  const _imageUpload = (imageList, addUpdateIndex) => {
    setProfileInfo({ ...profileInfo, profile_image: imageList });
  };
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

          <Breadcrumb.Item active className="text-dark fw-bold">
            {" "}
            Profile
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <h5 className="mb-5 text-center fw-bold">Personal Information</h5>

          <Row>
            <Col md={{ span: 5, offset: 4 }}>
              <div className="profile-image mb-5">
                <img src={profile} alt="" className="image-fluid" />
              </div>
              <div className="my-3 d-flex justify-content-end">
                <button className="change-btn" onClick={handleShow}>
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
              </div>
              <div className="d-flex border-bottom">
                <p style={{ width: 100, fontWeight: 700 }}>Name: </p>
                <p>H M Arifur Rahman</p>
              </div>
              <div className="d-flex  border-bottom mt-3">
                <p style={{ width: 100, fontWeight: 700 }}>Username: </p>
                <p>Dibakar123</p>
              </div>
              <div className="d-flex  border-bottom mt-3">
                <p style={{ width: 100, fontWeight: 700 }}>Email: </p>
                <p>admin@easysheba.com</p>
              </div>
              <div className="d-flex  border-bottom mt-3">
                <p style={{ width: 100, fontWeight: 700 }}>Phone: </p>
                <p>01706456817</p>
              </div>
              <div className="d-flex  border-bottom mt-3">
                <p style={{ width: 100, fontWeight: 700 }}>Address: </p>
                <p>Banasree</p>
              </div>
            </Col>
          </Row>
        </div>
        <EditProfileModal
          modalShow={modalShow}
          handleClose={handleClose}
          title={"Edit Profile"}
        >
          <Formik
            initialValues={{
              name: "",
              username: "",
              email: "",
              contactNumber: "",
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
                            label="Name"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                          />
                        </Col>
                        <Col md={6} style={{ width: 300 }}>
                          <TextField
                            label="Username"
                            type="text"
                            placeholder="Username"
                            name="username"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} style={{ width: 300 }}>
                          <TextField
                            label="Email"
                            type="email"
                            placeholder="abc@xyz.com"
                            name="email"
                          />
                        </Col>
                        <Col md={6} style={{ width: 300 }}>
                          {" "}
                          <TextField
                            label="Phone"
                            type="tel"
                            placeholder="Phone number"
                            name="contactNumber"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form2.Group
                            className="mb-2 input-max-w"
                            controlId="store_logo"
                          >
                            <Form2.Label className="fw-medium text-brand-primary mb-1">
                              Profile Image
                              <ImageUploader
                                onChange={_imageUpload}
                                images={profileInfo.profile_image}
                              />
                            </Form2.Label>
                          </Form2.Group>
                        </Col>
                        <Col md={6}>
                          <TextField
                            label="Address"
                            type="text-area"
                            placeholder="Address"
                            name="address"
                          />
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </EditProfileModal>
      </Container>
    </div>
  );
};

export default Profile;
