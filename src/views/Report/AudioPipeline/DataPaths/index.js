import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'react-grid-gallery';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);

  var IMAGES = [{
      src: path + data[keys[0]].img_path,
      thumbnail: path + data[keys[0]].img_path,
      caption: keys[0],
      width: 400,
      height: 400,
  },
  {
      src: path + data[keys[1]].img_path,
      thumbnail: path + data[keys[1]].img_path,
      caption: keys[1],
      width: 400,
      height: 400,
  }];
  const subKeys = Object.keys(data[keys[2]]);
  return (
    <section id="datadiagnostic">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={500} margin={20} />
        </Col>
      </Row>
      <Row align="center">
        <Col md={6}><h4><b>{keys[0]}</b></h4></Col>
        <Col md={6}><h4><b>{keys[1]}</b></h4></Col>
      </Row>
      <br />
      <h6 className="subtitle">{keys[2]}</h6>
      <p><strong>{subKeys} : {data[keys[2]][subKeys[0]]}</strong></p>
    </section>
  )
}

export default Index;
