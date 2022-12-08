import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import Attack from './Attack';

/*

*/
const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="performancetesting">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <p>{data.one_liner}</p>
        { keys.includes("Soak Test") ?
          <Attack
              title={"Soak Test"}
              data={data["Soak Test"]}
              path={path} /> : null }
        <br />
        { keys.includes("Stress Test") ?
          <Attack
              title={"Stress Test"}
              data={data["Stress Test"]}
              path={path} /> : null }
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Index);
