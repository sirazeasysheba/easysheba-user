import { Formik, Form } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextField from "../components/UI/TextField";
import * as Yup from "yup";
const SignUp = () => {
  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="my-2 form-wrapper px-2">
            <p className="text-center text-muted">Signup to continue</p>
            <div>
              <div className="d-flex justify-content-center">
                <Form>
                  <TextField
                    label="Name"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                  />
                  <TextField
                    label="Username"
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                  <TextField
                    label="Email"
                    type="email"
                    placeholder="abc@xyz.com"
                    name="email"
                  />
                  <TextField
                    label="Phone"
                    type="tel"
                    placeholder="Phone number"
                    name="phone"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    placeholder="*******"
                    name="password"
                  />
                  <Button
                    type="submit"
                    className="w-100 fw-medium shadow-none bg-success mt-2"
                  >
                    Signup
                  </Button>
                </Form>
              </div>

              <div
                className="d-flex justify-content-center mt-3"
                style={{ fontSize: 14 }}
              >
                <div>
                  <p className="text-muted text-center">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-brand-primary fw-medium signIn-signUp-link"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
