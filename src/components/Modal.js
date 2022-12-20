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

const { Step } = Steps;

const ComponentModal = ({ loggineduser }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [password, setPassowrd] = useState("");
  let navigate = useNavigate();

  let RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  useEffect(() => {
    console.log(loggineduser);
  }, []);
  // console.log(fullName);
  // console.log(email);
  // console.log(topic);
  const steps = [
    // {
    //   title: "Catogery",
    //   content: <Modalcontent1 catogery={catogery} setCatogery={setCatogery} />,
    // },
    {
      title: !loggineduser ? "Detials" : "Contact Us",
      content: !loggineduser ? (
        <Modalcontent2
          email={email}
          setEmail={setEmail}
          fullName={fullName}
          setFullName={setFullName}
          setPassowrd={setPassowrd}
          password={password}
        />
      ) : (
        <ContactInfo />
      ),
    },
    {
      title: "Project Name",
      content: <Modalcontent3 topic={topic} setTopic={setTopic} />,
    },
  ];

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
      onClick={() => (window.location = "/signup")}
    >
      Signup
    </Button>
  );

  const LoginDone = () => {
    if (topic !== "") {
      const user = Parse.User.current();
      user.set("topic", topic);
      user.save().then(() => {
        setIsModalVisible(false);
        window.location = ` /${auth.getCurrentUser().id}/tags`;
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
    if (
      RegExp.test(password) === true &&
      email !== "" &&
      fullName !== "" &&
      topic !== ""
    ) {
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
              console.log(res);
              window.location = ` /${auth.getCurrentUser().id}/tags`;

              // auth.sendEmail();
              setIsModalVisible(false);
            })
            .catch((error) => {
              console.log(error);
            });
        })

        .catch((error) => {
          console.log(error);
        });
      console.log(email, password);
    } else {
      console.log("exp error");
    }
  };
  // const afterDone = () => {
  //   const user = Parse.User.current();
  //   user.set("email", email);
  //   user.setUsername(email);
  //   user.set("fullname", fullName);
  //   user.set("topic", topic);
  //   user.setPassword(password);
  //   user
  //     .signUp()
  //     .then(() => {
  //       setIsModalVisible(false);
  //       notification["success"]({
  //         message: "Email Sent Sucessfully",
  //         description:
  //           "Project is added to queue signup to track your application,",
  //         duration: 10,
  //         btn,
  //       });
  //     })
  //     .then(() => {
  //       auth.sendEmail();
  //     })
  //     .catch((error) => {
  //       notification["error"]({
  //         message: "Error",
  //         description: error.message,
  //         duration: 5,
  //       });
  //     });
  // };
  // const openNotificationWithIcon = (type) => {
  //   setTimeout(() => {
  //     setIsModalVisible(false);
  //   }, 1000);
  //   notification[type]({
  //     message: "Email Sent Sucessfully",
  //     description:
  //       "The Project Viewable Link Has been Sent to Your Inbox, Kindly Ckeck.",
  //     duration: 10,
  //   });
  // };
  return (
    <>
      <Button
        // style={{ width: "300px", marginLeft: "300px", marginTop: "30px" }}
        className="myButton ModalButton"
        onClick={() => {
          showModal();
        }}
      >
        Proceed
      </Button>
      <Modal
        title="Aiensured"
        maskClosable={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
        bodyStyle={!loggineduser ? { height: 550 } : { height: 450 }}
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <hr />
        <div className="steps-content">{steps[current].content}</div>
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
          {current < steps.length - 1 && (
            <Button
              // disabled={disabled}
              className="myButton"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              className="myButton"
              onClick={() => (loggineduser ? LoginDone() : WithoutLoginDone())}
              // onClick={() => WithoutLoginDone()}
              // onSubmit={afterDone}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              className="myButton"
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
