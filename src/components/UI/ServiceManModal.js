import { Form, Formik } from "formik";
import React from "react";
import { Container, Button } from "react-bootstrap";
import Modal from "react-modal";
import * as Yup from "yup";
import close from "../../media/x-converted.png";
import TextField from "./TextField";
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

const ServiceManModal = ({ modalIsOpen, closeModal }) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(11, "Phone number is too short")
      .max(14, "Phone number is too long"),
  });
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
          <div>
            <div className="shadow mt-0 pb-3 pt-4">
              <h5 className="text-center" style={{ fontWeight: 600 }}>
                Be Service Man?
              </h5>
            </div>
            <Container>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  const user = values;
                  // console.log(user);
                  // dispatch(login(user));
                }}
              >
                {(formik) => (
                  <div className="mb-5 mt-3 form-wrapper px-2">
                    <h3 className="text-center mb-2">
                      Welcome to <span style={{ color: "#f16622" }}>Easy</span>
                      Sheba
                    </h3>
                    <p className="text-center text-muted">
                      Add Your Information
                    </p>
                    <div>
                      <div className="d-flex justify-content-center">
                        <Form style={{ width: 350 }}>
                          <TextField
                            label="Name"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                          />
                          <TextField
                            label="Phone Number"
                            type="text"
                            placeholder="01XXXXXXXXX"
                            name="phone"
                            //onChange={(e) => setPassword(e.target.value)}
                          />
                          <TextField
                            label="Upload CV"
                            type="file"
                            name="cv"
                            //onChange={(e) => setPassword(e.target.value)}
                          />
                          <Button
                            type="submit"
                            className="w-100 fw-medium shadow-none bg-success"
                          >
                            SUBMIT
                          </Button>
                        </Form>
                      </div>

                      <div
                        className="d-flex justify-content-center mt-3"
                        style={{ fontSize: 14 }}
                      ></div>
                    </div>
                  </div>
                )}
              </Formik>
            </Container>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ServiceManModal;
