import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Facebook from "assets/svg/Facebook";
import Instagram from "assets/svg/Instagram";
import Linkdin from "assets/svg/Linkdin";
import Twitter from "assets/svg/Twitter";
import Youtube from "assets/svg/Youtube";
import Gmail from "assets/svg/Gmail.js";
const Homefooter = () => {
  return (
    <div>
      <div className="homefooter">
        <Row>
          <Col>
            <img src={require("assets/aiensured-white.png")} alt="" />
            <p className="foopara">
              AiEnsured is complete testing suite for AI products.
            </p>
            <Col>
              <Instagram className="socialmediaicons" />
              <Linkdin className="socialmediaicons" />
              <Twitter className="socialmediaicons" />
              <Facebook className="socialmediaicons" />
              <Youtube className="socialmediaicons" />
            </Col>
          </Col>
          <Col className="footag">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              ad repudiandae ab eum quis ea sapiente voluptatibus,
              exercitationem maxime est in consectetur iure aliquam
              reprehenderit!
            </p>
            <Form className="newsletterbox">
              <Form.Label className="newsletterlabel">
                Subscribe for News Letter
              </Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control type="email" placeholder="Enter email" />
                <Button className="newsletterbtn" sm style={{ marginLeft: 5 }}>
                  {" "}
                  <Gmail className="newsletterlogo" />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Homefooter;
