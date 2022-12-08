import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';

//<Gallery data={data} path={path} />
import Technique from './Technique';

class Index extends React.Component {

  render(){
    const { data, path } = this.props;
    
    const keys = Object.keys(data);
    return (
      <Row>
        <Col className="attack-section">
          <Tabs defaultActiveKey={keys[0]}>
            {keys.map((key, i) => {
              if(key !== "one_liner") {
                return (
                  <Tab eventKey={key} title={key} key={i}>
                    <Technique title={key} data={data[keys[i]]} path={path} />

                  </Tab>
                );
              }
              return null
            })}
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default Index;
