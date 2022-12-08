import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'react-grid-gallery';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var IMAGES = [{
      src: path + data[keys[0]].img_path,
      caption: keys[1],
      width: 800,
      height: 400,
  }];
  /*

    */
  return (
    <section id="datadiagnostic">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Gallery
            images={IMAGES}
            rowHeight={500}
            margin={20} />
        </Col>
      </Row>
    </section>
  )
}

//backdropClosesModal={true}
export default Index;
