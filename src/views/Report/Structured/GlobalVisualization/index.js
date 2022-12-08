import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import Attack from './Attack';

class Index extends React.Component {
  render(){
    const { title, data, path, t } = this.props;
    const keys = Object.keys(data);
    return (
      <Row id="globalexplainability">
        <Col className="section">
          <h2 className="title">{title}</h2>
          <Tabs defaultActiveKey={keys[0]}>
            { keys.includes("Random Forest Model (RF)") ?
              <Tab eventKey={"Random Forest Model (RF)"} title={t("structured.randomforest")}>
                <Attack
                  title={"Random Forest Model (RF)"}
                  data={data["Random Forest Model (RF)"]}
                  path={path} />
              </Tab> : null }
            { keys.includes("Decision Tree Surrogates(DTS)") ?
              <Tab eventKey={"Decision Tree Surrogates(DTS)"} title={t("structured.decisiontree")}>
                <Attack
                  title={"Decision Tree Surrogates(DTS)"}
                  data={data["Decision Tree Surrogates(DTS)"]}
                  path={path} />
              </Tab> : null }
              { keys.includes("Shap Global") ?
                <Tab eventKey={"Shap Global"} title={t("structured.shapglobal")}>
                  <Attack
                    title={"Shap Global"}
                    data={data["Shap Global"]}
                    path={path} />
                  </Tab> : null }
              { keys.includes("Partial Dependency Plot(PDP)") ?
                <Tab eventKey={"Partial Dependency Plot(PDP)"} title={t("structured.pdp")}>
                  <Attack
                    title={"Partial Dependency Plot(PDP)"}
                    data={data["Partial Dependency Plot(PDP)"]}
                    path={path} />
                  </Tab> : null }
              { keys.includes("Permutation Feature Importance") ?
                <Tab eventKey={"Permutation Feature Importance"} title={t("structured.pfi")}>
                  <Attack
                    title={"Permutation Feature Importance"}
                    data={data["Permutation Feature Importance"]}
                    path={path} />
                  </Tab> : null }
          </Tabs>
          <h6 className="subtitle">Global Index Score</h6>
          { keys.includes("Global Index Score") ?
            <Attack
                title={"Global Index Score"}
                data={data["Global Index Score"]}
                path={path} /> : null }
        </Col>
      </Row>
    );
  }
}

export default withTranslation("common")(Index);
