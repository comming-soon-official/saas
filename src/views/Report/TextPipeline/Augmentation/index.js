import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
// import { Gallery } from 'components';
import Attack from "./Attack";

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="augmentation">
      <Col className="section">
        <h2 className="title">{title}</h2>
        <p>{data.one_liner}</p>
        <Tabs defaultActiveKey={keys[1]}>
          {keys.map((key, i) => {
            if(i>=1){
              return (
                <Tab eventKey={keys[i]} title={key.toUpperCase()} key={i}>
                  <Attack title={key} data={data[key]} path={path} />
                </Tab>
              );
            }
            return null;
          })}
        </Tabs>
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Index);
