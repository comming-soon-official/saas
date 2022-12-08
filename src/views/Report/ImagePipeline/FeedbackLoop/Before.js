import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import {Gallery} from "react-grid-gallery";

export const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var tableHtml = keys.map((key, i) => {
    if (i === 0 || i === 1) return null;
    return (
      <tr key={i}>
        <td>{key}</td>
        <td>{data[key].loss}</td>
        <td>{data[key].accuracy}</td>
      </tr>
    );
  });
  var IMAGES = [
    {
      src: process.env.PUBLIC_URL + path + data[keys[0]],
      thumbnail: process.env.PUBLIC_URL + path + data[keys[0]],
      width: 500,
      height: 300,
    },
    {
      src: process.env.PUBLIC_URL + path + data[keys[1]],
      thumbnail: process.env.PUBLIC_URL + path + data[keys[1]],
      width: 500,
      height: 300,
    },
  ];

  return (
    <section>
      <Row>
        <Col className="section">
          <h6 className="subtitle">{title}</h6>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Gallery
            images={IMAGES}
            backdropClosesModal={true}
            rowHeight={300}
            margin={20}
          />
        </Col>
      </Row>
      <Table bordered responsive size="lg">
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Loss</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>{tableHtml}</tbody>
      </Table>
    </section>
  );
};

export default Index;
