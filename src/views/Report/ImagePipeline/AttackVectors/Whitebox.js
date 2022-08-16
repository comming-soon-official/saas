import React from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import Attack from "./Attack";

const Whitebox = (props) => {
  const { data, path, t } = props;
  var keys = Object.keys(data);
  return (
    <Row id="art-whitebox">
      <Col className="section">
        <h6 className="subtitle">{t("image.attack.white")}</h6>
        <Tabs defaultActiveKey={keys[0]}>
          {keys.map((key, i) => {
            return (
              <Tab eventKey={key} title={key} key={i}>
                <Attack title={key} data={data[keys[i]]} path={path} />
              </Tab>
            );
          })}
        </Tabs>
      </Col>
    </Row>
  );
};

export default withTranslation("common")(Whitebox);
