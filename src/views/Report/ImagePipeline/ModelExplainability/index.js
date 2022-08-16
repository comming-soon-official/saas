import React from "react";
import { Row, Col } from "react-bootstrap";
import Whitebox from "./Whitebox";
import Blackbox from "./Blackbox";

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="modelexplainability">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <ul>
          {keys.includes("White Box (Saliency Maps)") ? (
            <>
              <Whitebox
                title="White Box (Saliency Maps)"
                data={data["White Box (Saliency Maps)"]}
                path={path}
              />
              <hr />
            </>
          ) : null}
          <br />
          {keys.includes("Black Box (LIME)") ? (
            <Blackbox
              title="Black Box (LIME)"
              data={data["Black Box (LIME)"]}
              path={path}
            />
          ) : null}
        </ul>
      </Col>
    </Row>
  );
};

export default Index;
