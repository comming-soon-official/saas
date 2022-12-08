import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Attack from './Attack';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <section id="biastechniques">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <ul className="list-unstyled">
        <li>
          <Row>
            <Col md={12}>
              <Attack title={keys[0]} data={data[keys[0]]} path={path} />
            </Col>
          </Row>
        </li>
      </ul>
    </section>
  );
}


export default Index;
