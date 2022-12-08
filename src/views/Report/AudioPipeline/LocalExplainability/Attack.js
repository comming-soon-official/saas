import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

//<Gallery data={data} path={path} />

const Index = (props) => {
  const { data, path } = props;
  return (
    <Row>
      <Col className="attack-section">
        <h6 className="">{data["one_liner"]}</h6>
        <br />
        <h6 className="tablename">False Positives</h6>
        <Gallery data={data["False Positives"]} path={path} />
        <br />
        <h6 className="tablename">False Negatives</h6>
        <Gallery data={data["False Negatives"]} path={path} />
      </Col>
    </Row>
  );

}

export default Index;
