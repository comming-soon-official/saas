import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import Gallery from "react-grid-gallery";
//var TFile = require('../data/covid_mask/meta_info/model_summary.txt');

//console.log(TFile);

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var tableHtml = keys.map((key, i) => {
    if (i > 1) return null;
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
      src: path + data[keys[2]],
      thumbnail: path + data[keys[2]],
      thumbnailWidth: 500,
      thumbnailHeight: 300,
    },
    {
      src: path + data[keys[3]],
      thumbnail: path + data[keys[3]],
      thumbnailWidth: 500,
      thumbnailHeight: 300,
    },
  ];
  return (
    <Row id="modeling">
      <Col className="section">
        <h2 className="title">{title}</h2>
        {data.model_summary_path}
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
      </Col>
    </Row>
  );
};

export default Index;
