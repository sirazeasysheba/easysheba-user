import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import TextField from "../components/UI/TextField";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../redux/actions/auth.actions";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState(null);
  const validate = Yup.object({
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  //redux

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.error) {
      setError(auth.error.data.message);
    }
  }, [auth.error]);

  useEffect(() => {
    if (auth.loading) {
      return <p>Loading.....</p>;
    }
  }, [auth.loading]);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (auth.authenticate) {
    //  return <Redirect to={`/dashboard`} />;
    history.replace(from);
  }

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(auth);
          const user = values;

          dispatch(login(user));
          if (auth.error) {
            toast(error, {
              type: "error",
              theme: "colored",
            });
          } else {
            toast("Login Successful!", {
              type: "success",
              position: "top-right",
              theme: "colored",
            });
          }
        }}
      >
        {(formik) => (
          <div className="mb-5 form-wrapper px-2" style={{ marginTop: 100 }}>
            <h3 className="text-center mb-2">
              Welcome to <span style={{ color: "#f16622" }}>Easy</span>Sheba
            </h3>
            <p className="text-center text-muted">Login to continue</p>
            <div>
              <div className="d-flex justify-content-center">
                <Form style={{ width: 350 }}>
                  <TextField
                    label="Email"
                    type="email"
                    placeholder="abc@xyz.com"
                    name="email"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    placeholder="*******"
                    name="password"
                    //onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="mb-3">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckIndeterminate"
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
                  <ToastContainer position="top-center" />
                </Form>
                {/* {auth.error && <p>{auth.error}</p>} */}
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
                      className="fw-medium text-danger"
                    >
                      Forget Password?
                    </Link>
                  </p>
                  <p className="text-muted text-center">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="fw-medium ">
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
