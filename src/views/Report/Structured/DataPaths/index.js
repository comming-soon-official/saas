import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import {Gallery} from 'react-grid-gallery';

class Index extends React.Component {

  componentDidMount(){

  }

  render(){
    const { title, data, path } = this.props;
    const keys = Object.keys(data);
    var table1Html = data[keys[0]].map((rowKey, i) => (
      <tr key={i}>
        {Object.keys(rowKey).map((row, i) => <td key={i}>{rowKey[row]}</td>)}
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
          { columns.map((column, j) => <td key={j}>{tableData[column][row]}</td> ) }
        </tr>
      );
    });
    var IMAGES = [{
      src: data[keys[2]]? path + data[keys[2]]:"nodata",
      thumbnail:data[keys[2]]? path + data[keys[2]]:"nodata",
      caption: keys[2],
      width: 500,
      height: 250
    },
    {
      src: data[keys[3]]? path + data[keys[3]]:"nodata",
      thumbnail: data[keys[3]]? path + data[keys[3]]:"nodata",
      caption: 500,
      height: 250
    },
    {
      src: data[keys[4]]? path + data[keys[4]]:"nodata",
      thumbnail: data[keys[4]]? path + data[keys[4]]:"nodata",
      caption: keys[4],
      width: data[keys[4]]?500:0,
      height: data[keys[4]]?250:0
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
                  {Object.keys(data[keys[0]][0]).map((rowHeader, i) => <th key={i}>{rowHeader}</th>)}
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
                  {Object.keys(data[keys[1]]).map((rowHeader, i) => <th key={i}>{rowHeader}</th>)}
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
        <br/>
        <Row align="center">
          <Col md={4}><h6><b>{keys[2]}</b></h6></Col>
          <Col md={4}><h6><b>{keys[3]}</b></h6></Col>
          <Col md={4}><h6><b>{keys[4]}</b></h6></Col>
        </Row>
      </section>
    );
  }
}

export default Index;
