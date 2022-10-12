import React from "react";
import { Row, Col } from "react-bootstrap";
import Charts from "./Charts";
import MetaPlots from "./MetaPlots";
import HeadTextData from "./HeadTextData";
import ClassDistribution from "./ClassDistribution";
import OutlierTable from "./OutlierTable";

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);

  return (
    <section id="datadiagnostic">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={6}>
          <ClassDistribution data={data[keys[0]]} path={path} title={keys[0]} />
        </Col>
        <Col md={6}>
          <Charts data={data[keys[1]]} path={path} />
        </Col>
      </Row>
      <br />
      <br />
      <OutlierTable data={data[keys[2]]} path={path} title={keys[2]} />
      <HeadTextData data={data[keys[3]]} path={path} title={keys[3]} />
      <MetaPlots data={data[keys[4]]} path={path} title={keys[4]} />
      <br />
    </section>
  );
};

export default Index;
