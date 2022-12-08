import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import Section from './Section';

class Index extends React.Component {
  constructor(props){
    super(props);

  }
  /*

  */
  render(){
    const { title, data, path } = this.props;
    const keys = Object.keys(data);
    return (
      <Row id="variables">
        <Col className="section">
          <h5 className="subtitle">{title}</h5>
          <Tabs defaultActiveKey="0">
            {keys.map((key, i) => {
              return (
                <Tab eventKey={i} title={keys[i]}>
                  <Section
                    title={keys[i]}
                    data={data[keys[i]]}
                    path={path} />
                </Tab>
              );
            })}
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default withTranslation("common")(Index);
