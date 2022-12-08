import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

class Index extends React.Component {
  render() {
    const { title, data } = this.props;
    // const keys = Object.keys(data);
    const tabledata = data;
    if (tabledata === null) return null
    const subKeys = Object.keys(tabledata);
    return (
      <Row className="section">
        <Col>
          <h5 className="tablename">{title}</h5>
          <Table bordered responsive size="sm">
            <thead>
              <tr>
                {subKeys.map(key => <th key={key}>{key}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                {subKeys.map(key => <td key={key}>{tabledata[key]}</td>)}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default Index;
