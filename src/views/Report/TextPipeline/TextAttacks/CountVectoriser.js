import React from 'react';
import { Row, Col, Table, Tabs, Tab } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {
  const { title, data } = props;
  var keys = Object.keys(data);
  return (
    <Row id="countvectoriser">
      <Col>
        <h6 className="subtitle">{title}</h6>
        <Tabs defaultActiveKey={keys[0]}>
          {keys.map((key, i) => {
            var tableData = data[key]["data"];
            var tableHtml = tableData.map((row, i) => {
              return (
                <tr key={i}>
                  <td>{row["original_text"]}</td>
                  <td>{row["perturbed_text"]}</td>
                </tr>
              );
            });
            return (
              <Tab eventKey={key} title={key.toUpperCase()} key={i}>
                <Table bordered responsive size="sm">
                  <thead>
                    <tr>{Object.keys(tableData[0]).map((row, j) => <th key={j}>{row.toUpperCase()}</th>)}</tr>
                  </thead>
                  <tbody>
                    {tableHtml}
                  </tbody>
                </Table>
              </Tab>
            );
          })}
        </Tabs>
      </Col>
    </Row>
  );
}

export default withTranslation("common")(Index);
