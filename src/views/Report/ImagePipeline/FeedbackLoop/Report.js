import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import Gallery from "react-grid-gallery";

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var tableHtml = keys.map((key, i) => {
    if (key === "train_results" || key === "val_results") {
      return (
        <tr key={i}>
          <td>{key}</td>
          <td>{data[key].loss}</td>
          <td>{data[key].accuracy}</td>
        </tr>
      );
    }
    return null;
  });

  var IMAGES = [
    {
      src: process.env.PUBLIC_URL + path + data["loss_plot_path"],
      thumbnail: process.env.PUBLIC_URL + path + data["loss_plot_path"],
      thumbnailWidth: 500,
      thumbnailHeight: 300,
    },
    {
      src: process.env.PUBLIC_URL + path + data["accuracy_plot_path"],
      thumbnail: process.env.PUBLIC_URL + path + data["accuracy_plot_path"],
      thumbnailWidth: 500,
      thumbnailHeight: 300,
    },
  ];
  return (
    <section>
      <Row>
        <Col className="section">
          <h6 className="subtitle">{title}</h6>
        </Col>
      </Row>
      <p>{data[keys[0]]}</p>
      <p>
        {keys[1]}
        {data[keys[1]]}
      </p>
      <p>
        {keys[2]}
        {data[keys[2]]}
      </p>
      <p>
        {keys[3]}
        {data[keys[3]]}
      </p>
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
