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
      width: 600,
      height: 200,
  }, {
    src: path + data[keys[1]].img_path,
    thumbnail: path + data[keys[1]].img_path,
    caption: keys[1],
    width: 600,
    height: 200
  },{
    src: path + data[keys[2]].img_path,
    thumbnail: path + data[keys[2]].img_path,
    caption: keys[2],
    width: 600,
    height: 200
  }];

  var IMAGES2 = [{
      src: path + data[keys[3]].img_path,
      thumbnail: path + data[keys[3]].img_path,
      caption: keys[3],
      width: 600,
      height: 200,
  }, {
    src: path + data[keys[4]].img_path,
    thumbnail: path + data[keys[4]].img_path,
    caption: keys[4],
    width: 600,
    height: 200
  },{
    src: path + data[keys[5]].img_path,
    thumbnail: path + data[keys[5]].img_path,
    caption: keys[5],
    width: 600,
    height: 200
  }];
  /*


  <h6 className="subtitle">{keys[2]}</h6>
  <p><strong>{subKeys} : {data[keys[2]][subKeys[0]]}</strong></p>
  */
  //const subKeys = Object.keys(data[keys[2]]);
  return (
    <section id="modelling">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Gallery images={IMAGES} backdropClosesModal={true} />
        </Col>
      </Row>
      <br />
      <Row align="center">
        <Col md={4}><h6><b>{keys[0]}</b></h6></Col>
        <Col md={4}><h6><b>{keys[1]}</b></h6></Col>
        <Col md={4}><h6><b>{keys[2]}</b></h6></Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <Gallery images={IMAGES2} backdropClosesModal={true} />
        </Col>
      </Row>
      <br />
      <Row align="center">
        <Col md={4}><h6><b>{keys[3]}</b></h6></Col>
        <Col md={4}><h6><b>{keys[4]}</b></h6></Col>
        <Col md={4}><h6><b>{keys[5]}</b></h6></Col>
      </Row>
      <br />
    </section>
  )
}

export default Index;
