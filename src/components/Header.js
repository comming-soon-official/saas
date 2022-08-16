import React, { useState, useEffect } from 'react';
import { Row, Col, Dropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Images } from '../themes';
import { auth } from "../services";
import '../App.scss';
import LaunchBtn from './LaunchBtn';
var license = require('../license.json');
var CurrentUser = auth.getCurrentUser();

const Index = (props,Admin) => {
  const [superAdminuser, setSuperAdminuser] = useState([]);
  const [adminuser, setAdminuser] = useState([]);
  const [username, setUsername] = useState(CurrentUser ? CurrentUser.get("email") : null);
  const [selectedItem, setSelectedItem] = useState(0);

  //{CurrentUserMail === superAdminuser ||CurrentUserMail ===adminuser?<LaunchBtn choice={props.choice} /> : null}
  const test = () => {
    let str = window.location.href, ps;
    let ip = str.indexOf("/");
    let tp = str.indexOf("text");
    let rp = str.indexOf("regression");
    let sp = str.indexOf("structured");
    let ap = str.indexOf("audio");
    let tsp = str.indexOf("timeseries");
    let sgp = str.indexOf("segmentation");
    let re = str.indexOf("recommendation");
    let od = str.indexOf("od");
    let cg = str.indexOf("config");
    let au = str.indexOf("auth");

    if (ip !== -1)
      ps = "Image Pipeline"
    if (tp !== -1)
      ps = "Text Pipeline"
    if (rp !== -1)
      ps = "Regression Pipeline"
    if (sp !== -1)
      ps = "Structured Pipeline"
    if (ap !== -1)
      ps = "Audio Pipeline"
    if (tsp !== -1)
      ps = "Timeseries Pipeline"
    if (sgp !== -1)
      ps = "Segmentation Pipeline"
    if (od !== -1)
      ps = "OD Pipeline"
    if (re !== -1)
      ps = "Recommendation Pipeline"
    if (cg !== -1 || au !== -1)
      ps = "Choose Pipeline"
    return (ps);
  }

  const loggedInHtml = (username) => {
    return (
      <>
        <Col xs={3} md={3} align="left">
          {window.location.href.indexOf('config') === -1 ?
            <Dropdown className="dropdown">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {selectedItem ? selectedItem : test()}
              </Dropdown.Toggle>
              <Dropdown.Menu onClick={e => setSelectedItem(e.target.innerText)}>
                {license.image === true ? <Dropdown.Item href="/">Image Pipeline</Dropdown.Item> : null}
                {license.text === true ? <Dropdown.Item href="/text">Text Pipeline</Dropdown.Item> : null}
                {license.structured === true ? <Dropdown.Item href="/structured">Structured Pipeline</Dropdown.Item> : null}
                {license.regression === true ? <Dropdown.Item href="/regression">Regression Pipeline</Dropdown.Item> : null}
                {license.audio === true ? <Dropdown.Item href="/audio">Audio Pipeline</Dropdown.Item> : null}
                {license.timeseries === true ? <Dropdown.Item href="/timeseries">Timeseries Pipeline</Dropdown.Item> : null}
                {license.od === true ? <Dropdown.Item href="/od">OD Pipeline</Dropdown.Item> : null}
                {license.segmentation === true ? <Dropdown.Item href="/segmentation">Segmentation Pipeline</Dropdown.Item> : null}
                {license.recommendation === true ? <Dropdown.Item href="/recommendation">Recommendation Pipeline</Dropdown.Item> : null}
              </Dropdown.Menu>
            </Dropdown> : null}
        </Col>
        <Col xs={1} md={{offset:5,span:1}} className="ml-auto">
          <Dropdown className="dropdown">
            <Dropdown.Toggle className='myButton' id="profile-menu">
              <FontAwesomeIcon icon={faUser}>{username}</FontAwesomeIcon>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{username}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={profile}>Profile Setting</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </>
    )
  }

  const logout = () => {
    if (username) {
      auth.logout();
      setUsername(null);
      window.location = '/auth/login';
    }
  }

  const profile = () => {
      // console.log("profile");
      window.location = '/auth/profile';
  }

  // Logout window if window idle for long time.
  setTimeout(() => logout(), 3600000 * 48)

  return (
    <div class="container-fluid">
      <div className="row py-3">
        <div className="col-md-3 d-inline align-middle">
          <Link to="/">
            <img src={Images.logo} width="120" alt="logo" />
          </Link>
        </div>
        {username != null ? loggedInHtml(username) : null}
      </div>
      <hr class="py-0"/>
    </div>
  )
}

export default Index;
