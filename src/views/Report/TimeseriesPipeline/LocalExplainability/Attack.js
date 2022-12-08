import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

class Index extends React.Component {

  render(){
    const { data, path } = this.props;
    const keys = Object.keys(data);
    return (
      <Row>
        <Col className="attack-section">
          <h6 className="">{data["one_liner"]}</h6>
          <br />
          { keys.includes("highest error instances") ? <>
          <h6 className="tablename">highest error instances</h6>
          <Gallery data={data["highest error instances"]} path={path} />
          </>: null }
          <br />
          { keys.includes("least error instances") ? <>
          <h6 className="tablename">least error instances</h6>
          <Gallery data={data["least error instances"]} path={path} />
          </> : null}
        </Col>
      </Row>
    );
  }
}

export default Index;
