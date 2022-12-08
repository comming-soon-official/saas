import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Attack from './Attack';

class Index extends React.Component {


  render(){
    const { title, data, path } = this.props;
    const keys = Object.keys(data);
    return (
      <Row id="global_explainabilty">
        <Col className="section">
          <h2 className="title">{title}</h2>
          <Tabs defaultActiveKey={keys[0]}>
            {keys.map((key, i) => {
              return (
                <Tab eventKey={key} title={key} key={i}>
                  <Attack title={key} data={data[keys[i]]} path={path} />
                </Tab>
              );
            })}
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default Index;
