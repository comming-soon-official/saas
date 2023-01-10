import React, { useState } from "react";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { notification } from "antd";
import { Formik, Form } from "formik";
import SaasLogo from "../../assets/saasaiensured.png";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "../../App.scss";
import { Link } from "react-router-dom";
import Parse from "../../services/parseService";
import { dashboard, signup } from "services/paths";

export const Signup = () => {
  let navigate = useNavigate();

  const validate = Yup.object({
    fullName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 charaters")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <div className="row" style={{ display: "flex" }}>
      <Col md={6} className="my-auto">
        <img w={100} className="img-fluid" src={SaasLogo} alt="logo" />
      </Col>
      <div className="col-md-5">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            const user = Parse.User.current()
              ? Parse.User.current()
              : new Parse.User();
            user.set("fullname", values.fullName);
            user.setUsername(values.email);
            user.setPassword(values.password);
            user.set("email", values.email);
            user
              .signUp()
              .then(() => {
                notification["success"]({
                  message: "Registred Sucessfully",
                  description:
                    "Your Account has Been Created, Check Your Mail Inbox to Verify",
                  duration: 5,
                });
                navigate("/login");
              })
              .catch((error) => {
                notification["error"]({
                  message: "Login Error",
                  description: error.message,
                  duration: 5,
                });
              });
          }}
        >
          {(formik) => (
            <div>
              <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
              <hr />
              <Form>
                <TextField
                  placeholder="Eg:- Himal .B"
                  label="Fullname"
                  name="fullName"
                  type="text"
                />
                <TextField
                  placeholder="Eg:- himal.b@testaing.com"
                  label="Email"
                  name="email"
                  type="email"
                />
                <TextField
                  placeholder="Password"
                  label="Password"
                  name="password"
                  type="password"
                />
                <TextField
                  placeholder="Confirm Password"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <Button className="myButton" type="submit">
                  Register
                </Button>
                <div>
                  <label className="myLinks">
                    <Link to="/login">Already have Account ?</Link>
                  </label>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className="row" style={{ display: "flex" }}>
      <Col md={7} className="my-auto">
        <img w={100} className="img-fluid" src={SaasLogo} alt="" />
      </Col>
      <div className="col-md-5">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            Parse.User.logIn(values.email, values.password)
              .then((user) => {
                notification["success"]({
                  message: "Logined Sucessfully",
                  description: `Welcome Home ${user.get("fullname")}`,
                  duration: 10,
                });
                setTimeout(() => {
                  window.location = `/${user.id}/dashboard`;
                }, 1000);
              })
              .catch((error) => {
                notification["error"]({
                  message: "Login Error",
                  description: error.message,
                  duration: 5,
                });
              });
          }}
        >
          {(formik) => (
            <div>
              <br />
              <br />
              <br />
              <h1 className="my-4 font-weight-bold .display-4">Login</h1>
              <hr />
              <Form>
                <TextField
                  placeholder="Eg:- himal.b@testaing.com"
                  label="Email"
                  name="email"
                  type="email"
                />
                <TextField
                  placeholder="Password"
                  label="Password"
                  name="password"
                  type="password"
                />
                <Button className="myButton" type="submit">
                  Login
                </Button>
                <div>
                  <br />
                  <label className="myLinks">
                    <Link to={signup}>
                      Don't have an account? Register Here
                    </Link>
                  </label>
                </div>
                {/* {errorMessage ? (
                  <Alert variant="danger">{errorMessage}</Alert>
                ) : null} */}
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
