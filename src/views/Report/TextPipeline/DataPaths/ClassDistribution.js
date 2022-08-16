import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

const Index = (props) => {

  const { title, data, path } = props;
  // const keys = Object.keys(data);
  var IMAGES = [{
    src: path + data.img_path,
    thumbnail: path + data.img_path,
    caption: title,
    thumbnailWidth: 500,
    thumbnailHeight: 300
  }];
  return (
    <Row>
      <Col md={12} className="section">
        <h6 className="subtitle">{title}</h6>
        <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={300} margin={20} />
      </Col>
    </Row>
  );
}

export default Index;
