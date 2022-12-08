import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Attack from './Attack';

function Index(props){
    const { title, data, path } = props;
    const keys = Object.keys(data);
    return (
      <Row id="local_explainabilty">
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

export default Index;
