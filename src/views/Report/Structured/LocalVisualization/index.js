import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import Attack from './Attack';

class Index extends React.Component {
  render(){
    const { title, data, path, t } = this.props;
    const keys = Object.keys(data);
    return (
      <Row id="localexplainability">
        <Col className="section">
          <h2 className="title">{title}</h2>
          <br />
          <Tabs defaultActiveKey={keys[0]}>
            { keys.includes("Shap Local") ?
              <Tab eventKey={"Shap Local"} title={t("structured.shaplocal")}>
                <Attack
                  title={"Shap Local"}
                  data={data["Shap Local"]}
                  path={path} />
              </Tab> : null }
            { keys.includes("Individual Conditional Expectation(ICE)") ?
              <Tab eventKey={"Individual Conditional Expectation(ICE)"} title={t("structured.ice")}>
                <Attack
                  title={"Individual Conditional Expectation(ICE)"}
                  data={data["Individual Conditional Expectation(ICE)"]}
                  path={path} />
              </Tab> : null }
            { keys.includes("Leave One Covariate Out(LOCO)") ?
              <Tab eventKey={"Leave One Covariate Out(LOCO)"} title={t("structured.loco")}>
                <Attack
                  title={"Leave One Covariate Out(LOCO)"}
                  data={data["Leave One Covariate Out(LOCO)"]}
                  path={path} />
              </Tab> : null }
            { keys.includes("Local Interpretable Model Agnostic Explanations(LIME)") ?
              <Tab eventKey={"Local Interpretable Model Agnostic Explanations(LIME)"} title={t("structured.lime")}>
                <Attack
                  title={"Local Interpretable Model Agnostic Explanations(LIME)"}
                  data={data["Local Interpretable Model Agnostic Explanations(LIME)"]}
                  path={path} />
              </Tab> : null }
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default withTranslation("common")(Index);
