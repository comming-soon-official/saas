import React from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import Case from "./Case";

const Index = (props) => {
  const { data, path, t } = props;
  const keys = Object.keys(data["Transformation"]);
  const key = Object.keys(data)[1];
  return (
    <section id="deepXplore">
      <Row>
        <Col md={12}>
          <h2 className="title">{t("image.deepXploreCorner")}</h2>
        </Col>
      </Row>
      <br />
      <h6>
        {key}
        {data[key]}
      </h6>
      <br />
      <Tabs defaultActiveKey={keys[0]}>
        {keys.map((key, i) => {
          return (
            <Tab eventKey={key} title={key} key={i}>
              <Case data={data["Transformation"][keys[i]]} path={path} />
            </Tab>
          );
        })}
      </Tabs>
    </section>
  );
};

export default withTranslation("common")(Index);
