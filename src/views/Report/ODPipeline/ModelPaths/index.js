import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <section id="modelling">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h6 className="tablename">{keys[0]}</h6>
          <Gallery data={data[keys[0]]} path={path} />
        </Col>
      </Row>
    </section>
  )
}

export default Index;
