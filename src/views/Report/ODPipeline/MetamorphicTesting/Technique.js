import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {

  const { data, path } = props;
  // const keys = Object.keys(data);
  return (
    <Row>
      <Col className="attack-section">
        <h6 className="subtitle">
          <a className="myLink" href={path + data["metrics_csv"]} target="_self">
            Mr. CSV <FontAwesomeIcon icon={faArrowCircleDown} />
          </a>
        </h6>
        <Gallery data={data} path={path} />
        <br />

        <br />
        <Row>
          <Col xs={10}>
            <h5 className="subtitle">Metrics</h5>&nbsp;&nbsp;
          </Col>
          <Col xs={2}>
            <h6 className="subtitle">
              <a className="myLink" href={path + data["metrics_csv"]} target="_self">
                Metrics CSV <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h6>
          </Col>
        </Row>
        <Gallery data={data["metrics"]} path={path} />
      </Col>
    </Row>
  );
}

export default Index;
