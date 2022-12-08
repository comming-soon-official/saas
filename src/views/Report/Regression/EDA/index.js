import React from "react";
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
// import Overview from './Overview';
// import Variables from './Variables';
// import Correlations from './Correlations';
// import Sample from './Sample';
// import Missing from './Missing';
import {Gallery} from 'react-grid-gallery';

//<Gallery data={data["EDA Report"]} path={path} />

const Index = (props) => {
  const { title, data, path } = props;
  var IMAGES = data["EDA Report"].map((image, i) => {
    return {
      src: path + image,
      thumbnail: path + image,
      caption: "",
      width: 400,
      height: 300
    };
  });
  return (
    <Row id="exploratorydataanalysis">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <p>{data.one_liner}</p>
        <Gallery images={IMAGES} backdropClosesModal={true} rowHeight={300} margin={20} />
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Index);
