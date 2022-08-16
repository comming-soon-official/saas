import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../services";
import { Images } from "../themes";

var CurrentUser = auth.getCurrentUser();

const MainNavbar = ({ logout }) => {
  return (
    <>
      <Container>
        <Navbar
          style={{
            marginBottom: "-10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Navbar.Brand
            href="#home"
            style={{ marginLeft: "10px", marginTop: "-10px" }}
          >
            <Link to="/">
              <img src={Images.logo} width="120" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Nav style={{ marginTop: "5px" }} className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Col style={{ marginTop: "-10px" }} xs={1}>
            <Dropdown className="dropdown">
              <Dropdown.Toggle className="myButton" id="profile-menu">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* <Dropdown.Item>{username}</Dropdown.Item> */}
                {/* <Dropdown.Divider /> */}
                {CurrentUser ? (
                  <>
                    <Dropdown.Item>Profile Setting</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item
                      onClick={() => {
                        window.location = "/login";
                      }}
                    >
                      Login
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        window.location = "/signup";
                      }}
                    >
                      Signup
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Navbar>
        <hr />
      </Container>
    </>
  );
};

export default MainNavbar;
