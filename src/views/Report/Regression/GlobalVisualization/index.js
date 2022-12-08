import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Attack from './Attack';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="globalexplainability">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <Tabs defaultActiveKey="0">
          {keys.includes("Random Forest Model (RF)") ?
            <Tab eventKey="0" title={"Random Forest Model (RF)"}>
              <Attack
                title={"Random Forest Model (RF)"}
                data={data["Random Forest Model (RF)"]}
                path={path} />
            </Tab> : null}
          {keys.includes("Decision Tree Surrogates(DTS)") ?
            <Tab eventKey="1" title={"Decision Tree Surrogates(DTS)"}>
              <Attack
                title={"Decision Tree Surrogates(DTS)"}
                data={data["Decision Tree Surrogates(DTS)"]}
                path={path} />
            </Tab> : null}
          {keys.includes("Shap Global") ?
            <Tab eventKey="2" title={"Shap Global"}>
              <Attack
                title={"Shap Global"}
                data={data["Shap Global"]}
                path={path} />
            </Tab> : null}
          {keys.includes("Partial Dependency Plot(PDP)") ?
            <Tab eventKey="3" title={"Partial Dependency Plot(PDP)"}>
              <Attack
                title={"Partial Dependency Plot(PDP)"}
                data={data["Partial Dependency Plot(PDP)"]}
                path={path} />
            </Tab> : null}
          {keys.includes("Permutation Feature Importance") ?
            <Tab eventKey="4" title={"Permutation Feature Importance"}>
              <Attack
                title={"Permutation Feature Importance"}
                data={data["Permutation Feature Importance"]}
                path={path} />
            </Tab> : null}
          {keys.includes("Global Index Score") ?
            <Tab eventKey="5" title={"Global Index Score"}>
              <Attack
                title={"Global Index Score"}
                data={data["Global Index Score"]}
                path={path} />
            </Tab> : null}
        </Tabs>
      </Col>
    </Row>
  );
}

export default Index;
