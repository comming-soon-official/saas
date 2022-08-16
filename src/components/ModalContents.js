import React from "react";
import { Formik, Field } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { TextField } from "../views/Auth/TextField";
import "./index.css";
export const Modalcontent1 = (props) => {
  const { catogery, setCatogery } = props;
  return (
    <>
      <h3>Select Category</h3>
      <br />
      <select
        onChange={(event) => {
          setCatogery(event.target.value);
        }}
        className="form-select"
        aria-label="Default select example"
      >
        <option defaultValue>Select Project Catogery</option>
        <option value="education">Education</option>
        <option value="buinsess">Buisness</option>
        <option value="persnol">Persnol</option>
        <option value="organization">Organization</option>
      </select>
    </>
  );
};
export const Modalcontent2 = (props) => {
  const { fullName, setFullName, email, setEmail } = props;
  // const validate = Yup.object({
  //   fullName: Yup.string().required("Name is required"),
  //   email: Yup.string()
  //     .email("please enter valid email")
  //     .required("Email is Required"),
  // });

  return (
    <>
      {/* <Formik
        initialValues={{
          fullName: "",
          email: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          // Parse.User.logIn(values.email, values.fullName)
          //   .then((user) => {
          //     notification["success"]({
          //       message: "Logined Sucessfully",
          //       description: `Welcome Home ${user.get("fullname")}`,
          //       duration: 10,
          //     });
          //     setTimeout(() => {
          //       window.location = "/";
          //     }, 3000);
          //   })
          //   .catch((error) => {
          //     notification["error"]({
          //       message: "Login Error",
          //       description: error.message,
          //       duration: 5,
          //     });
          //   });
        }}
      > */}
      {/* {(formik) => ( */}
      <div>
        <h3>Information Detials</h3>
        {/* <h3>Detials</h3> */}
        <Form>
          <Form.Group
            style={{ marginBottom: 10 }}
            NameName="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              type="text"
              placeholder="Eg:- Himal.B"
            />
          </Form.Group>
          <Form.Group cl assName="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
        </Form>
        {/* <Form>
              <TextField
                placeholder="Eg:- Himal.B"
                label="Full Name"
                name="fullName"
                type="text"
              />
              <TextField
                placeholder="Eg:- himal.b@testaing.com"
                label="Email"
                name="email"
                type="email"
              />
            </Form> */}
      </div>
      {/* )} */}
      {/* </Formik> */}
      {/* <h3>Detials</h3>
      <Form>
        <Form.Group NameName="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Eg:- Himal.B" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form> */}
    </>
  );
};
export const Modalcontent3 = (props) => {
  const { topic, setTopic } = props;
  // const validate = Yup.object({
  //   topic: Yup.string().required("Title is required"),
  // });

  return (
    <>
      <div>
        <h3>Name Your Project</h3>
        <br />
        <Form>
          <Form.Group NameName="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Topic</Form.Label>
            <Form.Control
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              type="text"
              placeholder="Eg:- Himal.B"
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};
