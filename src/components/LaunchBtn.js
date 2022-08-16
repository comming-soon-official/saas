import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const LaunchBtn = (props) => {
  return (
    <Col xs={12} md={12} align="center" className="launch">
      <Link to='/config' choice={props.choice}>
        <Button className="launchBtn myButton">
          LAUNCH
        </Button>
      </Link>
    </Col>
  )
}

export default LaunchBtn;
