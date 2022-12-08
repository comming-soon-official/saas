import React from "react";
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
//import Attack from './Attack';

const Index = (props) => {
  const { data } = props;
  const keys = Object.keys(data);
  
  return (
    <Row id="mat">
      <Col className="section">

      </Col>
    </Row>
  )
}

export default withTranslation("common")(Index);
