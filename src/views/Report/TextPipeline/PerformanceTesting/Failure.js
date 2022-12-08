import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const Index = (props) => {
  const { title, data } = props;
  // const keys = Object.keys(data);
  const tabledata = data[0];
  var tableHtml = null;
  if (tabledata != null) {
    const subKeys = Object.keys(tabledata);
    tableHtml = (
      <Table bordered responsive size="sm">
        <thead>
          <tr>
            {subKeys.map(key => <td key={key}>{key}</td>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {subKeys.map(key => <td key={key}>{tabledata[key]}</td>)}
          </tr>
        </tbody>
      </Table>
    );
  }

  return (
    <Row className="section">
      <Col>
        <h5 className="subtitle">{title}</h5>
        {tableHtml}
      </Col>
    </Row>
  );
}

export default Index;
