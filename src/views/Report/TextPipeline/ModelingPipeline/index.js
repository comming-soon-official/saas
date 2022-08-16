import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';;

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  var tableHtml = keys.map((key, i) => {
    if (i > 2 || i < 1) return null;
    return (
      <tr key={i}>
        <td>{key}</td>
        <td>{data[key]}</td>
      </tr>
    );
  });
  var IMAGES = [{
    src: path + data[keys[3]].img_path,
    thumbnail: path + data[keys[3]].img_path,
    thumbnailWidth: 1000,
    thumbnailHeight: 400,
  }];
  return (
    <Row id="modeling">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <Row>
          <Col md={12}>
            <p>{keys[0]} : {data[keys[0]]}</p>
          </Col>
        </Row>
        <Table bordered responsive size="lg">
          <thead>
            <tr>
              <th>Dataset</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {tableHtml}
          </tbody>
        </Table>
        <Row>
          <Col md={12}>
            <h5 className="subtitle">{keys[3]}</h5>
            <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={400} margin={20} />
          </Col>
        </Row>

      </Col>
    </Row>
  );
}

export default Index;
