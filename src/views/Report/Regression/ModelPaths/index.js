import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Index = (props) => {

  const { title } = props;
  return (
    <Row id="#">
      <Col className="section">
        <h2 className="title">{title}</h2>
      </Col>
    </Row>
  );
}

export default Index;
