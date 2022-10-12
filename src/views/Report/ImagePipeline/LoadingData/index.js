import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import Gallery from "react-grid-gallery";

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var rowKeys = Object.keys(data[keys[2]].duplicate);
  var rowsHtml = rowKeys.map((rowKey, i) => {
    return (
      <tr key={i}>
        <td>{rowKey}</td>
        <td>{data[keys[2]].duplicate[rowKey][1]}</td>
        <td>{data[keys[2]].duplicate[rowKey][0]}</td>
        <td>{data[keys[2]].outlier[rowKey][1]}</td>
        <td>{data[keys[2]].outlier[rowKey][0]}</td>
      </tr>
    );
  });

  var IMAGES = [
    {
      src: path + data[keys[1]],
      thumbnail: path + data[keys[1]],
      thumbnailWidth: 600,
      thumbnailHeight: 300,
    },
  ];
  const chartData = {
    labels: ["Data Points", "Validation Points"],
    datasets: [
      {
        data: [data[keys[2]].train_shape[0], data[keys[2]].test_shape[0]],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };
  return (
    <section id="loading">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="section">
          <Gallery
            images={IMAGES}
            backdropClosesModal={true}
            rowHeight={300}
            margin={20}
          />
        </Col>
        <Col md={4}>
          <p>
            Image Dimension: {data[keys[2]].image_shape[0]} x{" "}
            {data[keys[2]].image_shape[1]}
          </p>
          <p>Test Size: {data[keys[2]].test_size}</p>
          <Doughnut className="DonutChart" data={chartData} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <Table bordered responsive size="lg">
            <thead>
              <tr>
                <th>Classname</th>
                <th>Duplicate</th>
                <th>Duplicate %</th>
                <th>Outlier</th>
                <th>Outlier %</th>
              </tr>
            </thead>
            <tbody>{rowsHtml}</tbody>
          </Table>
        </Col>
      </Row>
    </section>
  );
};

export default Index;
