import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

class Index extends React.Component {

  render(){
    const { data, path } = this.props;
    return (
      <Row>
        <Col className="attack-section">
          <h6 className="">{data["one_liner"]}</h6>
          <Gallery data={data} path={path} />
        </Col>
      </Row>
    );
  }
}

export default Index;
