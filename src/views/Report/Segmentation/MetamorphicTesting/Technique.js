import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

class Index extends React.Component {

  render(){
    const {  data, path } = this.props;
    // const keys = Object.keys(data);
    return (
      <Row>
        <Col className="attack-section">
          <Gallery data={data} path={path} />
          <br/>
          <h6 className="subtitle">
            <a className="myLink" href={path + data["csv_path"]} target="_self">
              Mr. CSV <FontAwesomeIcon icon={faArrowCircleDown} />
            </a>
          </h6>
          <br />
          {data["metrics"]? <h5 className="subtitle">Metrics</h5>:null}
          <Gallery data={data["metrics"]} path={path} />
          {data["metrics"]? <h6 className="subtitle">
            <a className="myLink" href={path + data["csv_path"]} target="_self">
              Metrics CSV <FontAwesomeIcon icon={faArrowCircleDown} />
            </a>
          </h6>:null}
        </Col>
      </Row>
    );
  }
}

export default Index;
