import { Formik, Form } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import TextField from "../components/UI/TextField";

import * as Yup from "yup";
import usePasswordToggle from "../components/UI/usePasswordToggle";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions/user.actions";

const SignUp = () => {
  const [icon, inputType] = usePasswordToggle();
  //
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  if (auth.authenticate) {
    return <Redirect to={`/login`} />;
  }
  if (user.loading) {
    return <p>Loading</p>;
  }
  return (
    <>
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
          dispatch(signup(user));
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
                    name="contactNumber"
                  />
                  <div className="password">
                    <TextField
                      label="Password"
                      type={inputType}
                      placeholder="*******"
                      name="password"
                    />
                    <span className="eye-icon">{icon}</span>
                  </div>
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
                    <Link to="/login" className="fw-medium signIn-signUp-link">
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
