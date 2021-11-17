import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import React, { useState } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Row,
  Form as Form2,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from "../media/dummy-profile-pic.jpg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/UI/TextField";
import ImageUploader from "../components/UI/ImageUploader";
import { useSelector } from "react-redux";
import close from "../media/x-converted.png";
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "1000px",
    minHeight: "500px",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    padding: 0,

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
  zIndex: "10001 !important",
};
Modal.setAppElement("#root");
const Profile = () => {
  function openModal() {
    setIsOpen(true);
  }
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    // password: Yup.string()
    //   .min(6, "Password must be at least 6 characters")
    //   .required("Password is required"),
    address: Yup.string().required("Address is required"),
  });

  const auth = useSelector((state) => state.auth);
  const { name, username, email, contactNumber } = auth.user;

  const [profileInfo, setProfileInfo] = useState({
    profile_image: [],
  });
  const _imageUpload = (imageList, addUpdateIndex) => {
    setProfileInfo({ ...profileInfo, profile_image: imageList });
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
          <h5 className="mb-5  text-center fw-bold">Personal Information</h5>

          <Row>
            <Col md={{ span: 5, offset: 4 }}>
              <div className="profile-image mb-5">
                <img src={profile} alt="" className="image-fluid" />
              </div>
              <div className="my-3 d-flex justify-content-end">
                <button className="change-btn" onClick={openModal}>
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
              </div>
              <div className="d-flex border-bottom">
                <p style={{ width: 100, fontWeight: 700 }}>Name: </p>
                <p>{name}</p>
              </div>
              <div className="d-flex  border-bottom mt-3">
                <p style={{ width: 100, fontWeight: 700 }}>Username: </p>
                <p>{username}</p>
              </div>
              <div className="d-flex  border-bottom mt-3">
                <p style={{ width: 100, fontWeight: 700 }}>Email: </p>
                <p>{email}</p>
              </div>
              <div className="d-flex  border-bottom mt-3">
                <p style={{ width: 100, fontWeight: 700 }}>Phone: </p>
                <p>{contactNumber}</p>
              </div>
              <div className="d-flex  border-bottom mt-3">
                <p style={{ width: 100, fontWeight: 700 }}>Address: </p>
                <p>Banasree</p>
              </div>
            </Col>
          </Row>
        </div>
        <Modal isOpen={modalIsOpen} style={customStyles} afterOpenModal>
          <div>
            <button onClick={closeModal} style={buttonStyles}>
              <img src={close} alt="" />
            </button>
            <div className="pb-0">
              <div className="shadow mt-0 pb-3 pt-4 mb-3">
                <h5 className=" text-center" style={{ fontWeight: 600 }}>
                  Edit Profile Information
                </h5>
              </div>

              <Formik
                initialValues={{
                  name: "",
                  username: "",
                  email: "",
                  contactNumber: "",
                  address: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  // const data = new FormData();
                  // data.append("profileImage", profileInfo.profile_image);
                  const user = values;
                  user.profileImage = profileInfo.profile_image[0].file;
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
                                value={name}
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
                                type="text"
                                placeholder="Address"
                                name="address"
                              />
                            </Col>
                          </Row>

                          <div>
                            <Button
                              type="submit"
                              className="w-100 fw-medium shadow-none bg-success mt-2 mb-3"
                            >
                              Edit
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default Profile;
