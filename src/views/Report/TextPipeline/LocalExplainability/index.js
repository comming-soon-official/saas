import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Gallery } from 'components';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="localexplainability">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <Tabs defaultActiveKey={keys[0]}>
          {keys.map((key, i) => {
            return (
              <Tab eventKey={key} title={key} key={i}>
                <Gallery data={data[key]} path={path} />
              </Tab>
            );
          })}
        </Tabs>
      </Col>
    </Row>
  );
}

export default Index;
