import React from "react";
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import Attack from './Attack';
import Failure from './Failure';
import { Gallery } from 'components';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="performancetesting">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <h5 className="tablename">{keys[1]}</h5>
        { keys.includes("Plots") ?
          <Gallery
            data={data["Plots"]}
            path={path} /> : null }
        <br />
        { keys.includes("Soak Test") ?
          <Attack
              title={"Soak Test"}
              data={data["Soak Test"]}
              path={path} /> : null }
        <br />
        { keys.includes("Soak Test Failures") ?
          <Failure
            title={"Soak Test Failures"}
            data={data["Soak Test Failures"]}
            path={path} /> : null }
        { keys.includes("Stress Test") ?
          <Attack
              title={"Stress Test"}
              data={data["Stress Test"]}
              path={path} /> : null }
        <br />
        { keys.includes("Stress Test Failures") ?
          <Failure
            title={"Stress Test Failures"}
            data={data["Stress Test Failures"]}
            path={path} /> : null }
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Index);
