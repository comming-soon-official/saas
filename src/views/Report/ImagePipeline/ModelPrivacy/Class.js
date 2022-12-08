import React from "react";
import { Row, Col } from "react-bootstrap";
import { Gallery } from "../../../../components";

const Index = (props) => {
  const { data, path } = props;
  return (
    <Row>
      <Col className="section">
        <Gallery data={data} path={path} />
        <br />
      </Col>
    </Row>
  );
};

export default Index;
