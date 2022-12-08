import React from "react";
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Gallery } from "../../../../components";

const Index = (props) => {
  const { data, path, t } = props;
  //<p>{data.one_liner}</p>
  //<p>{data.layer_name}</p>

  return (
    <Row id="exp-whitebox">
      <Col className="section">
        <h6 className="subtitle">{t("image.explainability.white")}</h6>
        <Gallery data={data} path={path} />
      </Col>
    </Row>
  );
};

export default withTranslation("common")(Index);
