import React from "react";
import { Row, Col } from "react-bootstrap";
import { Gallery } from "../../../../components";

const Index = (props) => {
  const { title, data, path } = props;
  // const keys = Object.keys(data);
  return (
    <section>
      <Row>
        <Col className="section">
          <h6 className="subtitle">{title}</h6>
          <Gallery data={data} path={path} />
        </Col>
      </Row>
    </section>
  );
};

export default Index;
