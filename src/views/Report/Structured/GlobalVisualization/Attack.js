import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

class Index extends React.Component {
  render(){
    const { data, path } = this.props;
    //<p>{data.one_liner}</p>

    return (
      <Row>
        <Col className="attack-section">
          <Gallery data={data} path={path} />
        </Col>
      </Row>
    );
  }
}

export default Index;
