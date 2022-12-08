import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function Navigation(props){
  var { t } = props;
  return (
    <Navbar collapseOnSelect variant="primary" expand="lg" >
      <Navbar.Brand href="#home"><h1 className="navBrand">Report</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="navigation-bar" />
      <Navbar.Collapse id="navigation-bar">
        <Nav className="justify-content-end" defaultActiveKey="#loading" variant="pills">
          <Nav.Item><Nav.Link href="#loading">Data Diagnostic</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#modeling">Modeling Pipeline</Nav.Link></Nav.Item>
          <NavDropdown title="Model Explainability">
            <NavDropdown.Item eventKey="3.1" href="#exp-whitebox">{t("image.explainability.white")}</NavDropdown.Item>
            <NavDropdown.Item eventKey="3.2" href="#exp-blackbox">{t("image.explainability.black.title")}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Attack Vectors">
            <NavDropdown.Item eventKey="4.1" href="#art-whitebox">{t("image.attack.white")}</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" href="#art-blackbox">{t("image.attack.black")}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Metamorphic Testing" id="#metamorphic">
            <NavDropdown.Item eventKey="5.1" href="#meta-summary">Metamorphic Testing Summary</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.2" href="#meta-whitebox">White Box</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.3" href="#meta-blackbox">Black Box</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item><Nav.Link href="#deepXplore">{t("image.deepXplore")}</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#feedback_loop">Feedback Loop</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#modelprivacy">Model Privacy</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#modelquantization">Model Quantization</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#performancetesting">Performance Testing</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withTranslation("common")(Navigation);
