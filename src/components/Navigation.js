import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation(props) {
  var { data } = props;
  const linkHtml = data.map((link, i) => {
    var linkStr = "#" + link.split(" ").join("").toLowerCase();
    return (
      <Nav.Item key={i}>
        <Nav.Link href={linkStr}>{link}</Nav.Link>
      </Nav.Item>
    );
  });
  var linkStr = "#" + data[0];
  return (
    <Navbar collapseOnSelect variant="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="navBrand">Report</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="myNavbar" />
        <Navbar.Collapse id="myNavbar">
          <Nav defaultActiveKey={linkStr} variant="pills">
            {linkHtml}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
