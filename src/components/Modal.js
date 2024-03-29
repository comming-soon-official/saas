import React, { useState } from "react";
import "antd/dist/antd.css";
import "../App.scss";
import { Steps, Modal, notification } from "antd";
import { Button } from "react-bootstrap";
import {
  ContactInfo,
  Modalcontent1,
  Modalcontent2,
  Modalcontent3,
} from "./ModalContents";
import Parse from "../services/parseService";
import { useNavigate } from "react-router-dom";
import { auth } from "services";
import { useEffect } from "react";
import { signup, tags } from "services/paths";

const { Step } = Steps;

const ComponentModal = ({ loggineduser }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [password, setPassowrd] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [topicError, setTopicError] = useState("");
  let navigate = useNavigate();
  const userid = auth.getCurrentUser()?.id;
  // let RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  useEffect(() => {
    console.log(loggineduser);
    if (loggineduser) {
      console.log("im Loginned");
    } else {
      console.log("Im not a user");
    }
  }, []);

  const steps = [
    {
      title: "Detials",
      content: (
        <Modalcontent2
          email={email}
          setEmail={setEmail}
          fullName={fullName}
          setFullName={setFullName}
          setPassowrd={setPassowrd}
          password={password}
          nameError={nameError}
          setNameError={setNameError}
          emailError={emailError}
          setEmailError={setEmailError}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
        />
      ),
    },
    {
      title: "Project Name",
      content: (
        <Modalcontent3
          topic={topic}
          setTopic={setTopic}
          topicError={topicError}
          setTopicError={setTopicError}
        />
      ),
    },
  ];

  const steps2 = [
    {
      title: "Project Name",
      content: (
        <Modalcontent3
          topic={topic}
          setTopic={setTopic}
          topicError={topicError}
          setTopicError={setTopicError}
        />
      ),
    },
  ];

  const newstep = !loggineduser ? steps : steps2;
  // console.log(newstep);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setTimeout(() => {
      setIsModalVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const next = () => {
    if (password === "") {
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const btn = (
    <Button
      style={{ margin: 0 }}
      size="sm"
      className="myButton"
      onClick={() => (window.location = signup)}
    >
      Signup
    </Button>
  );

  const LoginDone = () => {
    if (topic !== "") {
      const user = Parse.User.current();
      user.set("topic", topic);
      user
        .save()
        .then(() => {
          setIsModalVisible(false);
          window.location = `/${userid}/tags`;
        })
        .catch((error) => {
          notification["error"]({
            message: "Error",
            description: error.message,
            duration: 5,
          });
        });
    } else {
      notification["error"]({
        message: "Error",
        description: "Please Don't Leave Empty Box",
        duration: 5,
      });
    }
  };
  const WithoutLoginDone = () => {
    const user = Parse.User.current();
    if (email !== "" && fullName !== "" && topic !== "") {
      user.set("email", email);
      user.setUsername(email);
      user.set("fullname", fullName);
      user.set("topic", topic);
      user.setPassword(password);
      user
        .signUp()
        .then(() => {
          Parse.User.logIn(email, password)
            .then((res) => {
              // console.log(res);
              window.location = `/${userid}/tags`;

              // auth.sendEmail();
              setIsModalVisible(false);
            })
            .catch((error) => {
              console.log(error);
            });
        })

        .catch((error) => {
          if (error.message === "Account already exists for this username.") {
            Parse.User.logIn(email, password)
              .then((res) => {
                console.log(res);
                // console.log(res);
                window.location = `/${res.id}/tags`;

                // auth.sendEmail();
                setIsModalVisible(false);
              })
              .catch((error) => {
                notification["error"]({
                  message: "Error",
                  description: `Already have an account on this Email but ${error.message}`,
                  duration: 5,
                });
              });
          } else {
            notification["error"]({
              message: "Error",
              description: `${error.message}`,
              duration: 5,
            });
          }
        });
      // console.log(email, password);
    } else {
      notification["error"]({
        message: "Error",
        description: "Please Don't Leave Empty Box",
        duration: 5,
      });
    }
  };

  return (
    <>
      <Button
        // style={{ width: "300px", marginLeft: "300px", marginTop: "30px" }}
        className="StartProjectbtn"
        onClick={() => {
          showModal();
        }}
      >
        Click to Proceed
      </Button>
      <Modal
        title="Aiensured"
        maskClosable={false}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
        bodyStyle={!loggineduser ? { height: 580 } : { height: 450 }}
      >
        <Steps current={current}>
          {newstep.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <hr />
        <div className="steps-content">{newstep[current].content}</div>
        {!loggineduser ? (
          <>
            {" "}
            <br />
            <br />
            <br />
            <br />
          </>
        ) : null}
        <div className="steps-action">
          <br />
          {current < newstep.length - 1 && (
            <Button
              // disabled={disabled}
              className="modalnxtbtn myButton"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === newstep.length - 1 && (
            <Button
              className={`${
                current > 0
                  ? "modaldonebtn myButton"
                  : "modalfinishbtn myButton"
              } `}
              onClick={() => (!loggineduser ? WithoutLoginDone() : LoginDone())}
              // onClick={() => WithoutLoginDone()}
              // onSubmit={afterDone}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              className="modaldonebtn myButton"
              style={{
                margin: "0 10px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ComponentModal;
