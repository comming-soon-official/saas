import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { Gallery } from 'react-grid-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var IMAGES = [{
      src: path + data[keys[2]],
      thumbnail: path + data[keys[2]],
      caption: "",
      width: 600,
      height: 400,
  }];
  var tableData1 = data[keys[0]];
  const subKeys1 = Object.keys(tableData1[0]);

  var tableData2 = data[keys[1]];
  const subKeys2 = Object.keys(tableData2[0]);
  return (
    <section id="modelling">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h6 className="subtitle">{keys[2].toUpperCase()}</h6>
          <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={500} margin={20} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h6 className="tablename">{keys[0]}</h6>
          <Table bordered responsive size="lg">
            <thead>
              <tr>
                {subKeys1.map((subKey) => <th>{subKey}</th>)}
              </tr>
            </thead>
            <tbody>
              {tableData1.map((row) => <tr>{Object.keys(row).map((key) => <td>{row[key]}</td>)}</tr>)}
            </tbody>
          </Table>
          <h6 className="subtitle">
            <a className="myLink" href={path + data[keys[3]]} target="_self">
            {keys[3].toUpperCase()}
            <FontAwesomeIcon icon={faArrowCircleDown} />
            </a>
          </h6>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h6 className="tablename">{keys[1]}</h6>
          <Table bordered responsive size="lg">
            <thead>
              <tr>
                {subKeys2.map((subKey) => <th>{subKey}</th>)}
              </tr>
            </thead>
            <tbody>
              {tableData2.map((row) => <tr>{Object.keys(row).map((key) => <td>{row[key]}</td>)}</tr>)}
            </tbody>
          </Table>
          <h6 className="subtitle">
            <a className="myLink" href={path + data[keys[4]]} target="_self">
            {keys[4].toUpperCase()}
            <FontAwesomeIcon icon={faArrowCircleDown} />
            </a>
          </h6>
        </Col>
      </Row>
    </section>
  )
}

export default Index;
