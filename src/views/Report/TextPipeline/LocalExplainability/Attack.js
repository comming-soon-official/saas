import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from '../../../../components';

const Index = (props) => {

  const { data, path } = props;
  var keys = Object.keys(data);
  return (
    <Row>
      <Col>
        <h5 className="tablename">{keys[0]}</h5>
        <Gallery data={data[keys[0]]} path={path} />
        <hr /><br />
        <h5 className="tablename">{keys[1]}</h5>
        <Gallery data={data[keys[1]]} path={path} />
      </Col>
    </Row>
  );
}

export default Index;
