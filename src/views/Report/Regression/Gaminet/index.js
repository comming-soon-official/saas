import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <section id="explainable">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <p>{data.one_liner}</p>
      <Gallery data={data[keys[1]]} path={path} />
      <br /><br />
      <Gallery data={data[keys[2]]} path={path} />
    </section>
  );
}


export default Index;
