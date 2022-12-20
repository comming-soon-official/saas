import React from "react";
// import { Form } from "react-bootstrap";
import { Select, Form, Input } from "antd";
import "./index.css";
const { Option } = Select;

// export const Modalcontent1 = (props) => {
//   const { catogery, setCatogery } = props;
//   return (
//     <>
//       <h3>Select Category</h3>
//       <br />
//       <Select
//         onChange={(event) => {
//           setCatogery(event.target.value);
//         }}
//         placeholder="Select Project Catogery"
//         className="form-select"
//         aria-label="Default select example"
//       >
//         <Option value="education">Education</Option>
//         <Option value="buinsess">Buisness</Option>
//         <Option value="persnol">Persnol</Option>
//         <Option value="organization">Organization</Option>
//       </Select>
//     </>
//   );
// };

export const ContactInfo = () => {
  return (
    <>
      <p style={{ fontSize: 20 }}>
        We Hope Everything is Going Fine,
        <br /> If Anything Goes Wrong Please Contact Us
        <br /> himal.b@testaing.com
      </p>
    </>
  );
};
export const Modalcontent2 = (props) => {
  const { fullName, setFullName, email, setEmail, setPassowrd, password } =
    props;
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
        <h3>Signup To Proceed</h3>
        <hr />
        {/* <h3>Detials</h3> */}
        <Form autoComplete="off" layout="vertical">
          <Form.Item
            className="username"
            label="Full Name"
            colon={false}
            rules={[
              {
                required: true,
                message: "Please put your full name!",
              },
            ]}
          >
            <Input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Eg:- Himal.B"
            />
          </Form.Item>
          <Form.Item
            className="username"
            label="Email"
            colon={false}
            rules={[
              {
                required: true,
                message: "Please put your email!",
              },
            ]}
          >
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Eg:- himal.b@testaing.com"
            />
          </Form.Item>
          <Form.Item
            className="username"
            label="Password"
            colon={false}
            rules={[
              {
                required: true,
                message: "Please your full name!",
              },
            ]}
          >
            <Input.Password
              value={password}
              placeholder="input password"
              onChange={(event) => setPassowrd(event.target.value)}
              autoComplete="off"
            />
          </Form.Item>

          {/* <Form.Group
            style={{ marginBottom: 10 }}
            className="mb-3"
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group> */}
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
        <hr />
        <br />
        <Form layout="vertical">
          <Form.Item
            className="username"
            label="Topic"
            colon={false}
            rules={[
              {
                required: true,
                message: "Please put full project",
              },
            ]}
          >
            <Input
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder="Eg:- TextEvaluation"
            />
          </Form.Item>
        </Form>
        {/* <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Topic</Form.Label>
            <Form.Control
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              type="text"
              placeholder="Eg:- Himal.B"
            />
          </Form.Group>
        </Form> */}
      </div>
    </>
  );
};
