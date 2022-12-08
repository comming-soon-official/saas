import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';
import { withTranslation } from 'react-i18next';

class Index extends React.Component {
  render(){
    const { data, path} = this.props;
    return (
      <Row>
        <Col className="attack-section">
          <p>{data.one_liner.replace("Fairml", "Fairness Evaluation")}</p>
          <Gallery data={data} path={path} />
        </Col>
      </Row>
    );
  }
}

export default withTranslation("common")(Index);
