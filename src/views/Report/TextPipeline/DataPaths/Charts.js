import React from "react";
import { Row, Col } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Index = (props) => {
  const { data } = props;
  const keys = Object.keys(data);
  const chart1Data = data[keys[0]];
  const chart2Data = data[keys[1]];
  const chartData = {
    labels: Object.keys(chart1Data),
    datasets: [
      {
        data: Object.keys(chart1Data).map((row) => chart1Data[row]),
        backgroundColor: ["#FF6384", "#36A2EB", "#FF0000"],
      },
    ],
  };

  var chart2Html = null;
  if (chart2Data != null) {
    const chartData2 = {
      labels: Object.keys(chart2Data),
      datasets: [
        {
          data: Object.keys(chart2Data).map((row) => chart2Data[row]),
          backgroundColor: ["#FF6384", "#36A2EB", "#FF0000"],
        },
      ],
    };
    chart2Html = (
      <Col md={6}>
        <h5 className="subtitle">{keys[1]}</h5>
        <Doughnut data={chartData2} />
      </Col>
    );
  }

  return (
    <Row>
      <Col md={12}>
        <h5 className="subtitle">{keys[0]}</h5>
        <Doughnut data={chartData} />
      </Col>
      {chart2Html}
    </Row>
  );
};

export default Index;
