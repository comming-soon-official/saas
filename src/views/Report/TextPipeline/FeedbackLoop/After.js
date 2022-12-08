import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const Index = (props) => {
  const { title, data } = props;
  const keys = Object.keys(data);
  const tableData1 = data[keys[0]];
  const tableData2 = data[keys[1]];
  /*
  <tr>{Object.keys(row).map((col) => <td>{col}</td>)}</tr>)}
  */
  return (
    <section>
      <Row>
        <Col className="section">
          <h6 className="subtitle">{title}</h6>
        </Col>
      </Row>
      <h6 className="tablename">{keys[0].toUpperCase()}</h6>
      <Table bordered responsive size="lg">
        <thead>
          <tr>
            <th></th>
            {Object.keys(tableData1[0]).map((col) => <td><b>{col}</b></td>)}
          </tr>
        </thead>
        <tbody>
          {Object.keys(tableData1).map((row) => {
            const table = tableData1[row];
            return (
              <tr>
                <td>{row}</td>
                {Object.keys(table).map((col) => <td>{table[col]}</td>)}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <h6 className="tablename">{keys[1].toUpperCase()}</h6>
      <Table bordered responsive size="lg">
        <thead>
          <tr>
            <th></th>
            {Object.keys(tableData1[0]).map((col) => <td><b>{col}</b></td>)}
          </tr>
        </thead>
        <tbody>
          {Object.keys(tableData1).map((row) => {
            const table = tableData2[row];
            return (
              <tr>
                <td>{row}</td>
                {Object.keys(table).map((col) => <td>{table[col]}</td>)}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </section>
  )
}

export default Index;
