import React from "react";
import { Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import Class from "./Class";

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  const tabsData = data[keys[2]];
  const tableData = data[keys[1]];
  const rows = Object.keys(tableData[0]);
  return (
    <Row id="modelprivacy">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <Row>
          <Col md={12}>
            <p>{data.one_liner}</p>
          </Col>
          <Col md={12}>
            <h6 className="subtitle">{keys[1]}</h6>
            <Table bordered responsive size="lg">
              <thead>
                <tr>
                  {rows.map((row, i) => (
                    <th key={i}>{row}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => {
                  return (
                    <tr key={i}>
                      {Object.keys(row).map((col, j) => (
                        <td key={j}>{row[col]}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={12}>
            <h6 className="subtitle">{keys[2]}</h6>
            <Tabs>
              {Object.keys(tabsData).map((key, i) => {
                return (
                  <Tab eventKey={key} title={key} key={i}>
                    <Class data={tabsData[key]} path={path} />
                  </Tab>
                );
              })}
            </Tabs>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Index;
