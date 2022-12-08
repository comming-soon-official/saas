import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

import { withTranslation } from 'react-i18next';

const Fairml = (props) => {
  return (
    <Row>
      <Col md={12}>
        <h6 className="subtitle">{props.title}</h6>
        <p>{props.data.one_liner}</p>
        <Gallery data={props.data} path={props.path} />
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Fairml);
