import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import {Gallery} from 'react-grid-gallery';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var table1Html = data[keys[0]].map((rowKey, i) => (
    <tr key={i}>
      {Object.keys(rowKey).map((row, i) => <td>{rowKey[row]}</td>)}
    </tr>
  ));
  //var table2Html = "";
  var tableData = data[keys[1]];
  var columns = Object.keys(tableData);
  var rows = Object.keys(tableData[columns[0]]);
  var table2Html = rows.map((row, i) => {
    return (
      <tr key={i}>
        <td>{row}</td>
        {columns.map((column, j) => <td>{tableData[column][row]}</td>)}
      </tr>
    );
  });
  var IMAGES = [{
    src: path + data[keys[2]],
    thumbnail: path + data[keys[2]],
    caption: keys[2],
    width: 500,
    height: 250
  }];
  return (
    <section id="data">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <h6 className="subtitle">{keys[0]}</h6>
          <Table bordered responsive size="sm">
            <thead>
              <tr>
                {Object.keys(data[keys[0]][0]).map((rowHeader, i) => <th>{rowHeader}</th>)}
              </tr>
            </thead>
            <tbody>
              {table1Html}
            </tbody>
          </Table>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <h6 className="subtitle">{keys[1]}</h6>
          <Table bordered responsive size="sm">
            <thead>
              <tr>
                <th></th>
                {Object.keys(data[keys[1]]).map((rowHeader, i) => <th>{rowHeader}</th>)}
              </tr>
            </thead>
            <tbody>
              {table2Html}
            </tbody>
          </Table>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12} className="section">
          <Gallery images={IMAGES} backdropClosesModal={true} />
        </Col>
      </Row>
    </section>
  );
}

export default Index;
