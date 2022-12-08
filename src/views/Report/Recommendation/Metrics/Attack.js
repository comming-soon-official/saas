import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'react-grid-gallery';
//import { Gallery } from 'components';

const Index = (props) => {
  const { data, path } = props;
  var IMAGES = [{
    src: path + data[0],
    thumbnail: path + data[0],
    caption: "",
    width: 800,
    height: 400,
  }];
  return (
    <Row>
      <Col className="attack-section">
        <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={500} margin={20} />
      </Col>
    </Row>
  );
}


export default Index;
