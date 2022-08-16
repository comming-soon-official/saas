import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const Index = (props) => {
  const { title, data } = props;
  const keys = Object.keys(data);
  const tablesData = data[keys[1]];
  const tablesName = Object.keys(tablesData);
  return (
    <Row className="section">
      <Col>
        <h5 className="subtitle">{title}</h5>
        <p>{data.one_liner}</p>
        <h6 className="subtitle">{keys[1]}</h6>
        <br />
        {tablesName.map((table) => {
          const tabledata = tablesData[table];
          const subKeys = Object.keys(tabledata);
          return (
            <>
              <h6 className="tablename">{table}</h6>
              <Table bordered responsive size="sm">
                <thead>
                  <tr>{subKeys.map(key => <td key={key}><b>{key}</b></td>)}</tr>
                </thead>
                <tbody>
                  <tr>
                    {subKeys.map(key => {
                      if (key === "response_time_percentiles" || key === "response_times") {
                        const subTabledata = tabledata[key];
                        const subTableKeys = Object.keys(subTabledata);
                        return (
                          <td>
                            <Table responsive size="sm">
                              <tr>
                                {subTableKeys.map((subKey) => <td>{subKey}</td>)}
                              </tr>
                              <tr>
                                {subTableKeys.map((subKey) => <td>{subTabledata[subKey]}</td>)}
                              </tr>
                            </Table>
                          </td>
                        )
                      } else {
                        return (
                          <td key={key}>{tabledata[key]}</td>
                        )
                      }
                    })}
                  </tr>
                </tbody>
              </Table>
              <br />
            </>
          )
        })}

      </Col>
    </Row>
  );
}

export default Index;
