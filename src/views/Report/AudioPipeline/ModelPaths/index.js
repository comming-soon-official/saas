import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { Gallery } from 'react-grid-gallery';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);

  var IMAGES = [{
      src: path + data[keys[0]].img_path,
      thumbnail: path + data[keys[0]].img_path,
      caption: keys[1],
      width: 400,
      height: 400,
  }, {
    src: path + data[keys[1]].img_path,
    thumbnail: path + data[keys[1]].img_path,
    caption: keys[2],
    width: 400,
    height: 400
  }];
  var tableData = data[keys[2]];
  const subKeys = Object.keys(tableData);
  var rowsHtml = subKeys.map((key, i) => {
    return (
      <tr key={i}>
        <td>{key}</td>
        <td>{tableData[key][0]["Loss"]}</td>
        <td>{tableData[key][1]["Accuracy"]}</td>
      </tr>
    );
  });

  return (
    <section id="modelling">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={500} margin={20} />
        </Col>
      </Row>
      <br />
      <Row align="center">
        <Col md={6}><h4><b>{keys[0]}</b></h4></Col>
        <Col md={6}><h4><b>{keys[1]}</b></h4></Col>
      </Row>
      <br />
      <h6 className="tablename">{keys[2]}</h6>
      <Row>
        <Col md={12}>
          <Table bordered responsive size="lg">
            <thead>
              <tr>
                <th></th>
                <th>Loss</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {rowsHtml}
            </tbody>
          </Table>
        </Col>
      </Row>
    </section>
  )
}

export default Index;
