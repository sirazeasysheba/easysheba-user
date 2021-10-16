import { Formik, Form } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextField from "../components/UI/TextField";
import * as Yup from "yup";
const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="my-5 form-wrapper px-2">
            <h3 className="text-center mb-2">Welcome to EasySheba</h3>
            <p className="text-center text-muted">Login to continue</p>
            <div>
              <div className="d-flex justify-content-center">
                <Form>
                  <TextField
                    label="Email"
                    type="email"
                    placeholder="abc@xyz.com"
                    name="email"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    placeholder="*******"
                    name="password"
                  />

                  <div className="mb-3">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    />
                    <label
                      className="form-check-label"
                      for="flexCheckIndeterminate"
                      style={{ fontSize: 14 }}
                    >
                      Remember me?
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="w-100 fw-medium shadow-none bg-success"
                  >
                    Login
                  </Button>
                </Form>
              </div>

              <div
                className="d-flex justify-content-center mt-3"
                style={{ fontSize: 14 }}
              >
                <div>
                  <p className="text-center">
                    {" "}
                    <Link
                      to="/forget-password"
                      className="text-brand-primary fw-medium signIn-signUp-link text-danger"
                    >
                      Forget Password?
                    </Link>
                  </p>
                  <p className="text-muted text-center">
                    Don’t have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-brand-primary fw-medium signIn-signUp-link"
                    >
                      Register
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

export default Login;
