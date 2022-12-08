import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

// <Gallery data={data} path={path} />

class Index extends React.Component {

  
  render(){
    const { data, path } = this.props;
    // const keys = Object.keys(data);
    return (
      <Row>
        <Col className="attack-section">
          {data.csv_path != null ? <h6 className="subtitle">
            <a className="myLink" href={path + data.csv_path} target="_self">
              CSV <FontAwesomeIcon icon={faArrowCircleDown} />
            </a>
          </h6> : null}
          {data.one_liner != null ? <p>{data.one_liner}</p> : null }
          <Gallery data={data} path={path} />
        </Col>
      </Row>
    );
  }
}

export default Index;
