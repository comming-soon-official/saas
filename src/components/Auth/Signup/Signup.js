import React,{useState} from "react";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { Formik, Form } from "formik";
import SaasLogo from "../../../assets/saasaiensured.png";
import { TextField } from "./TextField";
import * as Yup from "yup";
import "../../../App.css";
import { Link } from "react-router-dom";
import Parse from "../../../services/ParseService";

export const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");



  const validate = Yup.object({
    fullName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
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
    <div className="row">
      <div className="col-md-5">
        <Formik
          initialValues={{
            fullName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            const user = new Parse.User();
            user.set("fullname", values.fullName)
            user.set("username", values.userName);
            user.set("password", values.password);
            user.set("email", values.email);
            user
              .signUp()
              .then(() => {
                window.location = "/login";
              })
              .catch((error) => {
                setErrorMessage(error.message);
                setTimeout(() => {
                  setErrorMessage("")
                }, 3000);
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
                  placeholder="Eg:- himal"
                  label="Username"
                  name="userName"
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
                    <Link to="/">Already have Account ?</Link>
                  </label>
                </div>
                {errorMessage?<Alert variant="danger">{errorMessage}</Alert>:null}
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <Col md={7} className="my-auto">
        <img w={100} className="img-fluid" src={SaasLogo} alt="" />
      </Col>
    </div>
  );
};
