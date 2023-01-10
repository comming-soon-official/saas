import React from 'react';
import { Row, Col, Container, Nav, Image, Table } from 'react-bootstrap';
// import { Gallery } from 'components';

const Index = (props) => {

  const { title, data } = props;
  const keys = Object.keys(data);
  const headerKeys = Object.keys(data[keys[0]]);
  var tableHeader = headerKeys.map((key, i) => <th>{key}</th>);
  var tableHtml = keys.map((key, i) => {
    return (
      <tr key={i}>
        <td>{key}</td>
        <td>{data[key][headerKeys[0]]}</td>
        <td>{data[key][headerKeys[1]]}</td>
        <td>{data[key][headerKeys[2]]}</td>
        <td>{data[key][headerKeys[3]]}</td>
      </tr>
    );
  });
  return (
    <section>
      <Row>
        <Col className="section">
          <h6 className="subtitle">{title}</h6>
        </Col>
      </Row>
      <Table bordered responsive size="lg">
        <thead>
          <tr>
            <th></th>
            {tableHeader}
          </tr>
        </thead>
        <tbody>
          {tableHtml}
        </tbody>
      </Table>
    </section>
  )
}

export default Index;
