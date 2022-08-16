import React from "react";
import { Row, Col } from "react-bootstrap";
import Whitebox from "./Whitebox";
import Blackbox from "./Blackbox";
import Summary from "./Summary";

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="metamorphictesting">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <br />
        <h6 className="h6title">
          {keys[1]}
          {data[keys[1]]}
        </h6>
        <br />
        <ul>
          <li>
            <Summary title={keys[0]} data={data[keys[0]]} path={path} />
          </li>
          <br />
          {keys.includes("White Box (Saliency Maps)") ? (
            <li>
              <Whitebox
                title="White Box (Saliency Maps)"
                data={data["White Box (Saliency Maps)"]}
                path={path}
              />
            </li>
          ) : null}
          <br />
          {keys.includes("Black Box (LIME)") ? (
            <li>
              <Blackbox
                title="Black Box (LIME)"
                data={data["Black Box (LIME)"]}
                path={path}
              />
            </li>
          ) : null}
        </ul>
      </Col>
    </Row>
  );
};

export default Index;
