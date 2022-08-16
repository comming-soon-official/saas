import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import CountVectoriser from './CountVectoriser';
import TfidfVectoriser from './TfidfVectoriser';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="textattacks">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <p>{data.one_liner}</p>
        <ul class="list-unstyled">
          {keys.includes("CountVectoriser") ?
            <><li><CountVectoriser
              title="CountVectoriser"
              data={data["CountVectoriser"]}
              path={path} /></li><hr /></>
            : null}
          {keys.includes("TfidfVectoriser") ?
            <><li><TfidfVectoriser
              title="TfidfVectoriser"
              data={data["TfidfVectoriser"]}
              path={path} /></li><hr /></>
            : null}
        </ul>
      </Col>
    </Row>
  );
}

export default withTranslation("common")(Index);
