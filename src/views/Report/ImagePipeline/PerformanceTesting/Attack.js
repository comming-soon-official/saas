import React from "react";
import { Row, Col, Table } from "react-bootstrap";

const Index = (props) => {
  const { title, data } = props;
  const keys = Object.keys(data);
  console.log(keys);

  const table1data = data[keys[1]][0];
  // console.log(table1data)
  if (table1data === null || table1data === undefined) return null;
  const subKeys = Object.keys(table1data);
  return (
    <Row className="section">
      <Col>
        <h5 className="subtitle">{title}</h5>
        <p>{data.one_liner}</p>

        {data[keys[1]].length !== 0 ? (
          <>
            <h6 className="tablename">{keys[1]}</h6>
          </>
        ) : null}

        <Table bordered responsive size="sm">
          <thead>
            <tr>
              {subKeys.map((key) => (
                <td key={key}>
                  <b>{key}</b>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {subKeys.map((key) => {
                if (
                  key === "response_time_percentiles" ||
                  key === "response_times"
                ) {
                  const subTabledata1 = data[keys[1]][0][key];
                  const subKeys1 = Object.keys(data[keys[1]][0][key]);
                  return (
                    <td key={subKeys1}>
                      <Table responsive size="sm">
                        <tbody>
                          <tr>
                            {subKeys1.map((subKey) => (
                              <td key={subKey}>{subKey}</td>
                            ))}
                          </tr>
                          <tr>
                            {subKeys1.map((subKey) => (
                              <td key={subKey}>{subTabledata1[subKey]}</td>
                            ))}
                          </tr>
                        </tbody>
                      </Table>
                    </td>
                  );
                } else {
                  return (
                    <td key={key}>
                      {typeof data[keys[1]][0][key] !== "object"
                        ? data[keys[1]][0][key]
                        : null}
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Index;
