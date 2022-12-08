import React from 'react';
import { Row, Col, Table, Tabs, Tab } from 'react-bootstrap';
import Attack from './Attack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  const length = keys.length;
  var tableData = data[keys[0]];
  const subKeys = Object.keys(tableData[0]);
  return (
    <Row id="metrics">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <Tabs defaultActiveKey={keys[1]}>
          {keys.map((key, i) => {
            if (key !== "All metrics Download" && key !== "All metrics") {
              return (
                <Tab eventKey={key} title={key} key={i}>
                  <Attack
                    title={key}
                    data={data[key]}
                    path={path} />
                </Tab>
              );
            }
            return null;
          })}
        </Tabs>
        <h6 className="tablename">{keys[0]}</h6>
        <Table bordered responsive size="lg">
          <thead>
            <tr>
              {subKeys.map((subKey) => <th>{subKey}</th>)}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => <tr>{Object.keys(row).map((key) => <td>{row[key]}</td>)}</tr>)}
          </tbody>
        </Table>
        <h6 className="subtitle">
          <a className="myLink" href={path + data[keys[length - 1]]} target="_self">
            {keys[length - 1].toUpperCase()}
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </a>
        </h6>
      </Col>
    </Row>
  );
}


export default Index;
