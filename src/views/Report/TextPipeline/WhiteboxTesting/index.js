import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios').default;

const Index = (props) => {
  const { title, data, path} = props;
  const keys = Object.keys(data);
  const subKeys = Object.keys(data[keys[1]]);
  const tableData = data[keys[1]][subKeys[2]];
  // {subKeys1.map((subKey) => <td key={subKey}>{subKey}</td>)}
  return (
    <section id="whiteboxtesting">
        <Row className="section">
          <Col md={12}>
            <h2 className="title">{title}</h2>
            <p>{data.one_liner}</p>
          </Col>
        </Row>
        <h5 className="subtitle">{keys[1]}</h5>
        <br /><br />
        <Row align="center">
          <Col className="col-md-6">
            <h5 className="subtitle">
              <a className="myLink" href={path + data[keys[1]][subKeys[0]].data_path} target="_self">
                {subKeys[0]} <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h5>
          </Col>
          <Col className="col-md-6">
            <h5 className="subtitle">
              <a className="myLink" href={path + data[keys[1]][subKeys[1]].data_path} target="_self">
                {subKeys[1]} <FontAwesomeIcon icon={faArrowCircleDown} />
              </a>
            </h5>
          </Col>
        </Row>
        <Row id="neurons">
          <Col>
            <h6 className="tablename">{subKeys[2].toUpperCase()}</h6>
            <Table bordered responsive size="sm">
              <thead>
                <tr>
                  {Object.keys(tableData[0]).map(key => (
                    <td key={key}><b>{key}</b></td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {
                  tableData.map((row) => {
                    const keys = Object.keys(row);
                    return (
                      <tr>
                        <td>{row[keys[0]]}</td>
                        <td>{row[keys[1]]}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
    </section>
  )
}

export default withTranslation("common")(Index);
