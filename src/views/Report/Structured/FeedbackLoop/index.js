import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Before from './Before';
import Report from './Report';
import Prediction from './Prediction';

class Index extends React.Component {
  render(){
    const { title, data, path } = this.props;
    const keys = Object.keys(data);
    return (
      <section id="feedbackloop">
        <Row>
          <Col md={12}>
            <h2 className="title">{title}</h2>
          </Col>
        </Row>
        <Before title={keys[0]} data={data[keys[0]]} path={path} />
        <Report title={keys[1]} data={data[keys[1]]} path={path} />
        <Prediction title={keys[2]} data={data[keys[2]]} path={path} />
      </section>
    );
  }
}

export default Index;
