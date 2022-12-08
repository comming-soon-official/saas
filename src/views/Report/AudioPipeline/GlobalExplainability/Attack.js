import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Gallery } from 'components';

//<Gallery data={data} path={path} />

const Index = (props) => {
  const { data, path } = props;
  const keys = Object.keys(data);
  return (
    <Row>
      <Col className="attack-section">
        {keys.map((key, i) => {
          return (
            (i === 0 && key === "one_liner") ?
              <h6 className="">{data["one_liner"]}</h6> :
              (key === "img_path") ?
                <Gallery data={data} path={path} /> :
                <>
                  <h6 className="tablename">{keys[i]}</h6>
                  <Gallery data={data[keys[i]]} path={path} />
                  <br />
                </>
          );
        })}
      </Col>
    </Row>
  );
}

export default Index;
