import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../services";
import { Images } from "../themes";
import "./index.css";
var CurrentUser = auth.getCurrentUser();
var authData = CurrentUser ? CurrentUser.get("authData") : null;
let CurrentUserMail = CurrentUser ? CurrentUser.get("email") : null;
const MainNavbar = ({ logout }) => {
  const [anonuser, setAnonuser] = useState(true);

  useEffect(() => {
    if (authData !== undefined && authData?.anonymous !== undefined) {
      console.log("Anonuser");
      setAnonuser(true);
    } else {
      console.log("Non Anonuser");
      setAnonuser(false);
    }
    console.log(authData);
  }, []);

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
          <Col style={{ marginTop: "-3px" }} xs={1}>
            <Dropdown className="dropdown">
              <Dropdown.Toggle className="myButton" id="profile-menu">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* <Dropdown.Item>{username}</Dropdown.Item> */}
                {/* <Dropdown.Divider /> */}
                {!anonuser ? (
                  <>
                    <Dropdown.Item>{CurrentUserMail}</Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item
                      onClick={() => {
                        window.location = "/dashboard";
                      }}
                    >
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        window.location = "/image";
                      }}
                    >
                      Report
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        auth.logout().then(() => {
                          window.location = "/";
                          // window.location.reload();
                        })
                      }
                    >
                      Logout
                    </Dropdown.Item>
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
