import React from "react";
import { Row, Col, Table } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

const Index = (props) => {
  const { title, data } = props;
  const keys = Object.keys(data);
  var table1Data = data["Metamorphic Affine Transformation"];
  var keys1 = Object.keys(table1Data);
  var columns1 = Object.keys(table1Data[keys1[0]]);
  var table1Html = keys1.map((key) => {
    const subKeys = Object.keys(table1Data[key]);
    return (
      <tr key={key}>
        <td>{key}</td>
        {subKeys.map((subkey) => <td key={subkey}>{table1Data[key][subkey]}</td>)}
      </tr>
    );
  });

  var table2Data = data["Original classification Report"];
  var keys2 = Object.keys(table2Data);
  var columns2 = Object.keys(table2Data[keys2[0]]);
  var table2Html = keys2.map((key) => {
    const subKeys = Object.keys(table2Data[key]);
    return (
      <tr key={key}>
        <td>{key}</td>
        {subKeys.map((subkey) => <td>{table2Data[key][subkey]}</td>)}
      </tr>
    );
  });

  var table3Data = data["MR1 classification Report"];
  var keys3 = Object.keys(table3Data);
  var columns3 = Object.keys(table3Data[keys3[0]]);
  var table3Html = keys3.map((key) => {
    const subKeys = Object.keys(table3Data[key]);
    return (
      <tr key={key}>
        <td>{key}</td>
        {subKeys.map((subkey) => <td>{table3Data[key][subkey]}</td>)}
      </tr>
    );
  });

  var table4Data = data["MR2 classification Report"];
  var keys4 = Object.keys(table4Data);
  var columns4 = Object.keys(table4Data[keys4[0]]);
  var table4Html = keys4.map((key) => {
    const subKeys = Object.keys(table4Data[key]);
    return (
      <tr key={key}>
        <td>{key}</td>
        {subKeys.map((subkey) => <td>{table4Data[key][subkey]}</td>)}
      </tr>
    );
  });
  return (
    <Row id="metamorphictesting">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <p>{data.one_liner}</p>
        <section id="metamorphic-affine">
          <Row>
            <Col md={12}>
              <h6 className="tablename">{keys[1]}</h6>
              <Table bordered responsive size="sm">
                <thead>
                    <tr>
                      <th></th>
                      {columns1.map((colHeader, i) => <th key={i}>{colHeader}</th>)}
                    </tr>
                </thead>
                <tbody>
                  {table1Html}
                </tbody>
              </Table>
            </Col>
          </Row>
        </section>
        <section id="oc-report">
          <Row>
            <Col md={12}>
              <h6 className="tablename">Original Classification Report</h6>
              <Table bordered responsive size="sm">
                <thead>
                  <tr>
                    <th></th>
                    {columns2.map((colHeader, i) => <th key={i}>{colHeader}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {table2Html}
                </tbody>
              </Table>
            </Col>
          </Row>
        </section>
        <p>{data["Affine Transformation"]}</p>
        <section id="mr1-report">
          <Row>
            <Col md={12}>
              <h6 className="tablename">MR1 classification Report</h6>
              <Table bordered responsive size="sm">
                <thead>
                  <tr>
                    <th></th>
                    {columns3.map((colHeader, i) => <th key={i}>{colHeader}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {table3Html}
                </tbody>
              </Table>
            </Col>
          </Row>
        </section>
        <h6 className="subtitle">Permutation of class labels</h6>
        <p>{data["Permutation of class labels"]}</p>
        <section id="mr2-report">
          <Row>
            <Col md={12}>
              <h6 className="tablename">MR2 classification Report</h6>
              <Table bordered responsive size="sm">
                <thead>
                  <tr>
                    <th></th>
                    {columns4.map((colHeader, i) => <th key={i}>{colHeader}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {table4Html}
                </tbody>
              </Table>
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Index);
