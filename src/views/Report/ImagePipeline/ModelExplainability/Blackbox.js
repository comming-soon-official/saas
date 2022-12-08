import React from "react";
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Gallery } from "../../../../components";

const Index = (props) => {
  //<p>{data.layer_name}</p>
  const { data, path, t } = props;
  return (
    <Row id="exp-blackbox">
      <Col className="section">
        <h6 className="subtitle">{t("image.explainability.black.title")}</h6>
        <p>{t("image.explainability.black.description")}</p>
        <Gallery data={data} path={path} />
      </Col>
    </Row>
  );
};

export default withTranslation("common")(Index);
