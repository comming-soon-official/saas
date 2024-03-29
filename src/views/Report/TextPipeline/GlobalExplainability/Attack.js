import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

const Index = (props) => {
    const { data, path } = props;
    return (
      <Row>
        <Col className="attack-section">
          <Gallery data={data} path={path} />
        </Col>
      </Row>
    );
}

export default Index;
