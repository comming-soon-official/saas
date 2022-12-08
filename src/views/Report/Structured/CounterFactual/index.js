import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
// import {Gallery} from 'react-grid-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

class Index extends React.Component {

  componentDidMount(){

  }

  fetchRow = (rowID) => {
    const { data } = this.props;
    // var keys = Object.keys(data);
    var table1Data = data["Query Instance"];
    var table2Data = data["Diverse Counterfactuals"];
    console.log(table1Data);
    console.log(table2Data);
    var length = Object.keys(table1Data[0]).length;
    var rowHtml = Object.keys(table1Data[0]).map((column, j) => {
      return (
        <td key={j}>
          <Table bordered responsive size="sm">
            <tbody>
              <tr>
                <td><b>Actual</b></td>
                <td>{table1Data[rowID][column]}</td>
              </tr>
              <tr>
                <td><b>Counter</b></td>
                <td>{(j === length-1) ? table2Data[rowID]["Prediction"] : table2Data[rowID][column]}</td>
              </tr>
            </tbody>
          </Table>
        </td>
      );
    });
    return rowHtml;
  }

  render(){
    // <h6 className="subtitle">{data.one_liner}</h6>
    const { title, data, path } = this.props;
    // var keys = Object.keys(data);
    return (
      <section id="counterfactualsgenerated">
        <Row>
          <Col md={12}>
            <h2 className="title">{title}</h2>
          </Col>
        </Row>
        <br />
        <Row align="center">
          <Col className="col-md-6">
            <h5 className="subtitle">
              <a className="myLink" href={path + data["Query Instance Download"]} target="_self">
                Query Instance <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h5>
          </Col>
          <Col className="col-md-6">
            <h5 className="subtitle">
              <a className="myLink" href={path + data["Diverse Counterfactuals Download"]} target="_self">
                Diverse Counterfactuals <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  {Object.keys(data["Diverse Counterfactuals"][0]).map((rowHeader, i) => <th key={i}>{rowHeader.toUpperCase()}</th>)}
                </tr>
              </thead>
              <tbody>
                {Object.keys(data["Diverse Counterfactuals"]).map((key, i) => <tr key={i}>{this.fetchRow(key)}</tr>)}
              </tbody>
            </Table>
          </Col>
        </Row>
        <br />
      </section>
    );
  }
}

export default Index;
