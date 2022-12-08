import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'react-grid-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);

  var IMAGES = [{
      src: path + data[keys[1]].img_path,
      thumbnail: path + data[keys[1]].img_path,
      caption: "",
      width: 800,
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
          <h6 className="subtitle">{keys[1].toUpperCase()}</h6>
          <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={500} margin={20} />
        </Col>
      </Row>
        <Row>
        <Col md={12}>
          <h6 className="subtitle">
            <a className="myLink" href={path + data[keys[0]].data_path} target="_self">
            {keys[0].toUpperCase()}
            <FontAwesomeIcon icon={faArrowCircleDown} />
            </a>
          </h6>
        </Col>
      </Row>
    </section>
  )
}

export default Index;
