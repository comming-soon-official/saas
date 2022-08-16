import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Whitebox from './Whitebox';
import Blackbox from './Blackbox';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="attackvectors">
    <Col className="section">
      <h2 className="title">{title}</h2>
      <br />
      <h6 className="h6title">{keys[0]}{data[keys[0]]}</h6>
      <br />
      <ul>
        { keys.includes("White BOX Attacks") ?
          <><li><Whitebox
            title="White BOX Attacks"
            data={data["White BOX Attacks"]}
            path={path} /></li><hr /></>
          : null }
        { keys.includes("Black BOX Attacks") ?
          <li><Blackbox
            title="Black BOX Attacks"
            data={data["Black BOX Attacks"]}
            path={path} /></li>
          : null }
      </ul>
    </Col>
  </Row>  )
}

export default Index