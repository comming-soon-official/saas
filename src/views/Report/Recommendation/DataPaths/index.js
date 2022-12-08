import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'react-grid-gallery';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);

  var IMAGES = [{
      src: path + data[keys[0]],
      thumbnail: path + data[keys[0]],
      caption: "",
      width: 600,
      height: 400,
  }];
  var IMAGES_1 = [{
      src: path + data[keys[1]],
      thumbnail: path + data[keys[1]],
      caption: "",
      width: 600,
      height: 400,
  }];
  return (
    <section id="datadiagnostic">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <h6 className="subtitle">{keys[0].toUpperCase()}</h6>
          <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={500} margin={20} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h6 className="subtitle">{keys[1].toUpperCase()}</h6>
          <Gallery images={IMAGES_1} backdropClosesModal={true} rowHeight={500} margin={20} />
        </Col>
      </Row>
    </section>
  )
}

export default Index;
