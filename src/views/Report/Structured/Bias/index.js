import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import Attack from './Attack';
import { withTranslation } from 'react-i18next';
import Fairml from './Fairml';
import SensitiveAttributes from './SensitiveAttributes';
import BiasMultiModel from './BiasMultiModel';
import BiasPositiveUnlabelled from './BiasPositiveUnlabelled';

class Index extends React.Component {


  componentDidMount(){

  }

  render(){
    const { title, data, path, } = this.props;
    const keys = Object.keys(data);
    return (
      <section id="biastechniques">
        <Row>
          <Col md={12}>
            <h2 className="title">{title}</h2>
          </Col>
        </Row>
        <ul className="list-unstyled">
            { keys.includes("FairML") ?
              <li><Fairml
                title="FairML"
                data={data["FairML"]}
                path={path} /></li>
              : null }
            { keys.includes("Sensitive Attributes") ?
              <li><SensitiveAttributes
                title="Sensitive Attributes"
                data={data["Sensitive Attributes"]}
                path={path} /></li>
              : null }
            { keys.includes("Bias Postive Unlabelled") ?
              <li><BiasPositiveUnlabelled
                title="Bias Postive Unlabelled"
                data={data["Bias Postive Unlabelled"]}
                path={path} /></li>
              : null }
            { keys.includes("Bias Multi-Model Feature Set Segmentation") ?
              <li><BiasMultiModel
                title="Bias Multi-Model Feature Set Segmentation"
                data={data["Bias Multi-Model Feature Set Segmentation"]}
                path={path} /></li>
              : null }
        </ul>
      </section>
    );
  }
}

export default withTranslation("common")(Index);
