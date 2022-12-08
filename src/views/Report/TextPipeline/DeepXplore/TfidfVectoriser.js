import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {
  const { title, data, path } = props;
  var tableHtml = '';
  var keys = Object.keys(data);
  var tableData = data["neuron_cov"].data_path;
  //{tableData.map((row, i) => <td key={i}>{tableData[row]}</td>)}
  var tableHtml = tableData.map((row, i) => {
    //console.log(row);
    return (
      <tr key={i}>
        <td>{row["Text"]}</td>
        <td>{row["Value"]}</td>
      </tr>
    );
  });
  return (
    <Row id="art-whitebox">
      <Col className="section">
        <h6 className="subtitle">{title}</h6><br /><br />
        <Row>
          <Col md={4}>
            <h5 className="subtitle">
              <a className="myLink" href={path + data["pred"].data_path} target="_self">pred <FontAwesomeIcon icon={faArrowCircleDown} /></a>
            </h5>
          </Col>
          <Col md={4}>
            <h5 className="subtitle">
              <a className="myLink" href={path + data["tsdata"].data_path} target="_self">tsdata <FontAwesomeIcon icon={faArrowCircleDown} /></a>
            </h5>
          </Col>
          <Col md={4}>
            <h5 className="subtitle">
              <a className="myLink" href={path + data["bestword"].data_path} target="_self">bestword <FontAwesomeIcon icon={faArrowCircleDown} /></a>
            </h5>
          </Col>
        </Row>
        <br />
        <h6 className="tablename">neuron_cov</h6>
        <Table bordered responsive size="sm">
          <thead>
            <tr>{Object.keys(tableData[0]).map((row) => <th>{row}</th>)}</tr>
          </thead>
          <tbody>
            {tableHtml}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default withTranslation("common")(Index);
