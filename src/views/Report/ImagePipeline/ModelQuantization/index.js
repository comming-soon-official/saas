import React from "react";
import { Row, Col, Table } from "react-bootstrap";

const Index = (props) => {
  const { title, data } = props;
  const keys = Object.keys(data);
  const keys1 = keys.slice(0, -1);
  const keys2 = Object.keys(data[keys1[0]]);
  const rows = ["Model", ...keys2];
  return (
    <Row id="modelquantization">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <Table bordered responsive size="lg">
          <thead>
            <tr>
              {rows.map((row, i) => (
                <th key={i}>{row}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {keys1.map((key1, i) => (
              <tr key={i}>
                <td>{key1}</td>
                <td>{data[key1][rows[1]]}</td>
                <td>{data[key1][rows[2]]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h6>
          {keys[keys.length - 1]}: {data[keys[keys.length - 1]]}
        </h6>
        <br />
      </Col>
    </Row>
  );
};

export default Index;
