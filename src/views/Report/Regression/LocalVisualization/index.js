import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Attack from './Attack';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="localexplainability">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <Tabs defaultActiveKey="0">
          {keys.includes("Shap Local") ?
            <Tab eventKey="0" title={"Shap Local"}>
              <Attack
                title={"Shap Local"}
                data={data["Shap Local"]}
                path={path} />
            </Tab> : null}
          {keys.includes("Individual Conditional Expectation(ICE)") ?
            <Tab eventKey="1" title={"Individual Conditional Expectation(ICE)"}>
              <Attack
                title={"Individual Conditional Expectation(ICE)"}
                data={data["Individual Conditional Expectation(ICE)"]}
                path={path} />
            </Tab> : null}
          {keys.includes("Local Interpretable Model Agnostic Explanations(LIME)") ?
            <Tab eventKey="2" title={"Local Interpretable Model Agnostic Explanations(LIME)"}>
              <Attack
                title={"Local Interpretable Model Agnostic Explanations(LIME)"}
                data={data["Local Interpretable Model Agnostic Explanations(LIME)"]}
                path={path} />
            </Tab> : null}
        </Tabs>
      </Col>
    </Row>
  );
}

export default Index;
