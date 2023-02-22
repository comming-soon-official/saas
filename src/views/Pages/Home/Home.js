import {
  faArrowRight,
  faPersonWalkingDashedLineArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MainNavbar } from "components";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Uploads from "views/FileUploader/Uploads";
import "./style.css";
import { auth } from "services";
import ComponentModal from "components/Modal";
import { Progress } from "antd";
import Homefooter from "./Homefooter";

const Home = () => {
  const [allProgress, setAllProgress] = useState([
    {
      key: 1,
      progressbar: 0,
      completed: false,
      showdataset: true,
      btnloading: null,
    },
    { key: 2, progressbar: 0, completed: false },
    { key: 3, progressbar: 0, completed: false },
    { key: 4, progressbar: 0, completed: false },
  ]);
  // Scroll Down
  const [scrollDown, setScrollDown] = useState(true);
  // Full page height
  const homeHeight = document.documentElement.scrollHeight;

  const [filenmae, setFilename] = useState("");
  const [loggineduser, setLoggineduser] = useState(null);
  var CurrentUser = auth.getCurrentUser();

  var authData = CurrentUser ? CurrentUser.get("authData") : null;
  useEffect(() => {
    if (auth.getCurrentUser()) {
      console.log(auth.getCurrentUser());
      return;
    } else {
      // console.log("hey im anonuser");
      auth.ParseAnonymousUser().then((res) => {
        console.log(res);
      });
      console.log(auth.getCurrentUser());
    }
  }, []);

  useEffect(() => {
    if (authData !== undefined && authData?.anonymous !== undefined) {
      console.log("Non Loginned User");
      setLoggineduser(false);
    } else if (CurrentUser) {
      console.log("Loginned User");
      setLoggineduser(true);
    } else {
      console.log("anon user");
      setLoggineduser(false);
    }
  }, []);

  window.onscroll = function() {
    if(window.scrollY > (homeHeight - 1.2 * window.innerHeight) ){
      setScrollDown(false);
    }
    else{
      setScrollDown(true);
    }
  };
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight + window.scrollY,
      behavior: "smooth",
    });
    console.log("Scrolling Down ", window.innerHeight + window.scrollY);
  };

  return (
    <div>
      <MainNavbar />
      <br />
      <br />
      <Container>
        {
          scrollDown && 
          <img
            className="mousescroll"
            src={require("assets/scroll-down.gif")}
            alt=""
            srcset=""

            style={{ width: 50, height: 50, cursor: "pointer", zIndex: 1000 }}

            onClick={handleScroll}
          />
        }

        <div>
          <Row className="">
            {/* <h1 className="contentheading">
              Hello Guys Upload Some And Lets Play with AI
            </h1> */}
            <Col>
              <img
                style={{ marginBottom: 70 }}
                src={require("assets/aiensuredbig.png")}
                alt="textanalysisimage"
                className="aiensuredpic"
              />
              <p
                style={{ marginBottom: 70, marginLeft: 30 }}
                className="contentheading"
              >
                Testing Suite For AI/ML Products.{" "}
              </p>
              {allProgress[0].progressbar === 100 &&
              allProgress[1].progressbar === 100 ? null : (
                <div className="startuploadtag">
                  <h1>
                    {allProgress[0].completed
                      ? "Upload the Modal File"
                      : "Start With Uploading Dataset"}
                    <FontAwesomeIcon
                      style={{ marginLeft: 10, marginBottom: -3 }}
                      icon={faArrowRight}
                    />
                  </h1>
                </div>
              )}

              {allProgress[0].progressbar === 100 &&
              allProgress[1].progressbar === 100 ? (
                <ComponentModal
                  loggineduser={loggineduser}
                  className="modalswitchbutton"
                />
              ) : null}
              <div className="progressbarsection">
                <p style={{ color: "green" }}>{filenmae}</p>
                <br />
                {allProgress[3].progressbar ? (
                  <Progress
                    percent={allProgress[3].progressbar}
                    format={(percent) => `${percent + "%"}`}
                  />
                ) : null}
              </div>
              <br />
              <br />
            </Col>
            <Col>
              <div className="uploads">
                <Uploads
                  setAllProgress={setAllProgress}
                  allProgress={allProgress}
                />
              </div>
            </Col>
          </Row>
          <br />
          <br />
          {/* <div className="clientsection">
            <p className="contentheading">Our Clients</p>
          </div>
          <Row>
            <Col>
              <img
                className="clientlogo"
                src={require("assets/momagic.jpg")}
                alt=""
              />
            </Col>
            <Col>
              <img
                className="clientlogo"
                src={require("assets/mygate.jpg")}
                alt=""
              />
            </Col>
            <Col>
              <img
                className="clientlogo"
                src={require("assets/mobilous.jpg")}
                alt=""
              />
            </Col>
            <Col>
              <img
                className="clientlogo"
                src={require("assets/kritikal.jpg")}
                alt=""
              />
            </Col>
          </Row> */}
          <hr />
          <Row className="section1">
            <Col>
              {/* <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/dashboard-growth-5380686-4497645.png"
                alt=""
              /> */}
              <video
                loading="lazy"
                muted="muted"
                type="video/mp4"
                autoplay="autoplay"
                loop="loop"
                width="598"
                height="450"
                src="https://cdnl.iconscout.com/lottie/premium/thumb/man-monitoring-dashboard-3571542-3025939.mp4?modified_at=1619166692"
                alt=""
              />
            </Col>
            <Col>
              <h1 className="contentheading">Who Knows</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente molestiae sint tempora, vel quod, perferendis fuga
                velit ea provident, quos ut temporibus corrupti illo tenetur.
                Itaque praesentium omnis mollitia? Tenetur doloribus consectetur
                tempore expedita aut, veritatis pariatur, cum architecto aperiam
              </p>
            </Col>
          </Row>
          <Row className="section1">
            <Col>
              <h1 className="contentheading">Who Knows</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente molestiae sint tempora, vel quod, perferendis fuga
                velit ea provident, quos ut temporibus corrupti illo tenetur.
                Itaque praesentium omnis mollitia? Tenetur doloribus consectetur
                tempore expedita aut, veritatis pariatur, cum architecto aperiam
              </p>
            </Col>
            <Col>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/business-plan-1742087-1479435.png"
                alt=""
              />
            </Col>
          </Row>
          <Row className="section1">
            <Col>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/woman-working-on-business-analysis-6377968-5270626.png"
                alt=""
              />
            </Col>
            <Col>
              <h1 className="contentheading">Who Knows</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente molestiae sint tempora, vel quod, perferendis fuga
                velit ea provident, quos ut temporibus corrupti illo tenetur.
                Itaque praesentium omnis mollitia? Tenetur doloribus consectetur
                tempore expedita aut, veritatis pariatur, cum architecto aperiam
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </div>
      </Container>
      <Homefooter />
    </div>
  );
};

export default Home;
