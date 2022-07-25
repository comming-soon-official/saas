import React, { useState } from "react";
import { Button, Row, Col, Alert } from 'react-bootstrap';
import { Formik, Form } from "formik";
import SaasLogo from "../../../assets/saasaiensured.png";
import { TextField } from "../Signup/TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Parse from '../../../services/ParseService'

import "../../../App.css";
export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");


  const loginned=()=>{

  }
  const validate = Yup.object({
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className="row">
      <div className="col-md-5">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            Parse.User.logIn(values.email,values.password)
            .then((user) => {
              console.log(user.get("email"));
              //history.replace(from);
              window.location = '/';
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
              <br />
              <br />
              <br />
              <h1 className="my-4 font-weight-bold .display-4">Login</h1>
              <hr />
              <Form>
                <TextField  placeholder="Eg:- himal.b@testaing.com" label="Email" name="email" type="email" />
                <TextField  placeholder="Password" label="Password" name="password" type="password" />
                <Button className="myButton" type="submit">
                  Login
                </Button>
                <div>
                  <br />
                  <label className="myLinks">
                    <Link to="/signup">Don't have an account? Register Here</Link>
                  </label>
                </div>
                {errorMessage?<Alert variant="danger">{errorMessage}</Alert>:null}
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <Col md={7} className="my-auto">
          <img w={100} className="img-fluid" src={SaasLogo} alt=""/>
        </Col>
    </div>
  );
};
