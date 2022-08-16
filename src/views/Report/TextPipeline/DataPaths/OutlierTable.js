import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const Index = (props) => {

  const { title, data } = props;
  var table1Html = Object.keys(data).map((rowKey, i) => (
    <tr key={i}>
      <td>{rowKey}</td>
      {Object.keys(data[rowKey]).map((row, i) => <td key={i}>{data[rowKey][row]}</td>)}
    </tr>
  ));
  return (
    <Row>
      <Col md={12}>
        <h6 className="tablename">{title}</h6>
        <Table bordered responsive size="sm">
          <thead>
            <tr>
              <th>Dataset</th>
              <th>Samples</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {table1Html}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Index;
