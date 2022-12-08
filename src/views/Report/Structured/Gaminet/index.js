import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

class Index extends React.Component {
  render(){
    const { title, data, path } = this.props;
    const keys = Object.keys(data);
    // console.log(`data = ${data},path=${path}`)
    return (
      <section id="explainable">
        <Row>
          <Col md={12}>
            <h2 className="title">{title}</h2>
          </Col>
        </Row>
        <p>{data.one_liner}</p>
        <Gallery data={data[keys[1]]} path={path} />
        <br /><br />
        <Gallery data={data[keys[2]]} path={path} />
      </section>
    );
  }
}

export default Index;
