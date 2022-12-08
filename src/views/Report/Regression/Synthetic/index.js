import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
// import Attack from './Attack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var tableData = data[keys[1]];
  var columns = Object.keys(tableData[0]);
  var tableHtml = tableData.map((row, i) => {
    return (
      <tr key={i}>
        {columns.map((column, j) => <td key={j}>{tableData[i][column]}</td>)}
      </tr>
    );
  });
  return (
    <Row id="syntheticdata">
      <Col className="section">
        <h2 className="title">{title}</h2>

        <Row>
          <Col className="col-md-10">
            <p>{data.one_liner}</p>
          </Col>
          <Col className="col-md-2" pull="right">
            <h5 className="subtitle">
              <a className="myLink" href={path + data["Synthetic Data Download"]} target="_self">
                Download <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h5>
          </Col>
        </Row>
        <Table bordered responsive size="sm">
          <thead>
            <tr>
              {Object.keys(tableData[0]).map((rowHeader, i) => <th key={i}>{rowHeader}</th>)}
            </tr>
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
