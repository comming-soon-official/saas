import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Attack from './Attack';

class Index extends React.Component {

  render() {
    const { title, data, path } = this.props;
    const keys = Object.keys(data);
    return (
      <section id="metamorphictesting">
        <Row>
          <Col>
            <h2 className="title">{title}</h2>
            <p>{data.one_liner}</p>
            <Tabs defaultActiveKey={keys[1]}>
              {keys.map((key, i) => {
                if(key !== "one_liner") {
                  return (
                    <Tab eventKey={key} title={key} key={i}>
                      <Attack title={key} data={data[keys[i]]} path={path} />
                    </Tab>
                  );
                }
                return null
              })}
            </Tabs>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Index;
