import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services";
import { home, signup, login, dashboard } from "services/paths";
import { Images } from "../themes";
import "./index.css";
var CurrentUser = auth.getCurrentUser();
var authData = CurrentUser ? CurrentUser.get("authData") : null;
let CurrentUserMail = CurrentUser ? CurrentUser.get("email") : null;
const MainNavbar = ({ logout }) => {
  const [anonuser, setAnonuser] = useState(true);
  const navigate = useNavigate();

  const dummy = () => {
    if (authData !== undefined && authData?.anonymous !== undefined) {
      setAnonuser(true);
    } else if (
      authData?.anonymous ? Object.keys(authData?.anonymous).length === 0 : null
    ) {
      console.log(authData);
      setAnonuser(true);
    } else if (typeof (authData === undefined) && CurrentUser) {
      setAnonuser(false);
    } else if (typeof (authData === undefined)) {
      setAnonuser(true);
    } else {
      setAnonuser(false);
    }
  };
  useEffect(() => {
    dummy();
  }, [anonuser]);
  return (
    <>
      <Container fluid className="impnavbar">
        <Navbar
          style={{
            marginBottom: "-10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}>
            <Link to={home}>
              <img src={Images.logo} width="120" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Nav style={{ marginTop: "5px" }} className="me-auto">
            {/* <ul className="Navitems me-auto">
            <li>Partners</li>
            <li>Contact Us</li>
            <li>Clients</li>
            <li>About Us</li>
          </ul> */}
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Col xs={1}>
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
                        window.location = home;
                      }}
                    >
                      Home
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        window.location = dashboard;
                      }}
                    >
                      Dashboard
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={() =>
                        auth.logout().then(() => {
                          window.location = login;
                          // window.location.reload(;
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
                        window.location = login;
                      }}
                    >
                      Login
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        window.location = signup;
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
