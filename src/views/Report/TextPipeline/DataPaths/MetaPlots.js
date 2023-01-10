import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
// import { Gallery } from 'components';
import Attack from './Attack';

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row id="metaplots">
      <Col className="section">
        <h6 className="tablename">{title}</h6>
        <Tabs>
          {keys.includes("Word Cloud") ?
            <Tab eventKey={"Word Cloud"} title={"Word Cloud"}>
              <Attack title={"Word Cloud"} data={data["Word Cloud"]} path={path} />
            </Tab> : null
          }
          {keys.includes("Word Count Distribution") ?
            <Tab eventKey={"Word Count Distribution"} title={"Word Count Distribution"}>
              <Attack title={"Word Count Distribution"} data={data["Word Count Distribution"]} path={path} />
            </Tab> : null
          }
          {keys.includes("Word Frequency Bigram") ?
            <Tab eventKey={"Word Frequency Bigram"} title={"Word Frequency Bigram"}>
              <Attack title={"Word Frequency Bigram"} data={data["Word Frequency Bigram"]} path={path} />
            </Tab> : null
          }
          {keys.includes("Class Distribution") ?
            <Tab eventKey={"Class Distribution"} title={"Class Distribution"}>
              <Attack title={"Class Distribution"} data={data["Class Distribution"]} path={path} />
            </Tab> : null
          }
          {keys.includes("Word Frequency Unigram") ?
            <Tab eventKey={"Word Frequency Unigram"} title={"Word Frequency Unigram"}>
              <Attack title={"Word Frequency Unigram"} data={data["Word Frequency Unigram"]} path={path} />
            </Tab> : null
          }
        </Tabs>
      </Col>
    </Row>
  );
}

export default Index;
