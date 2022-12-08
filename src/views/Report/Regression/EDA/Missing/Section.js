import React from 'react';
import { Row } from 'react-bootstrap';

const Index = (props) => {

  const { data } = props;
  return (
    <Row>
      <img src={data.matrix} />
    </Row>
  );
}

export default Index;
