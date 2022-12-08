import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Attack from './Attack';
import Technique from './Technique';

class Index extends React.Component {

  
  render() {
    const { title, data, path } = this.props;
    const keys = Object.keys(data);
    return (
      <section id="model">
        <Row>
          <Col>
            <h2 className="title">{title}</h2>
            <p>{data.one_liner}</p>
            <h6 className="subtitle">{keys[1]}</h6>
            <Attack title={keys[1]} data={data[keys[1]]} path={path} />
            <h6 className="subtitle">{keys[2]}</h6>
            <Technique title={keys[2]} data={data[keys[2]]} path={path} />
          </Col>
        </Row>
      </section>
    );
  }
}

export default Index;
