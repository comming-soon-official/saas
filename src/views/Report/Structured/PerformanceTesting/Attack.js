import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
// import { Gallery } from 'components';

class Index extends React.Component {
  render() {
    const { title, data } = this.props;
    const keys = Object.keys(data);
    const table1data = data[keys[1]][0];
    if (table1data === null) return null
    const subKeys = Object.keys(table1data);
    return (
      <Row className="section">
        <Col>
          <h5 className="subtitle">{title}</h5>
          <p>{data.one_liner}</p>
          {data[keys[1]].length !== 0 ?
            <>
              <h6 className="tablename">{keys[1]}</h6>
            </> : null}
          <Table bordered responsive size="sm">
            <thead>
              <tr>
                {subKeys.map(key => {
                  return (
                    <td key={key}>{key}</td>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                  {subKeys.map(key => {
                    if(key === "response_time_percentiles" || key === "response_times"){
                      const subTabledata1 = data[keys[1]][0][key];
                      const subKeys1 = Object.keys(data[keys[1]][0][key]);
                      return (
                        <td>
                          <Table responsive size="sm">
                            <tr>
                              {subKeys1.map((subKey) => <td>{subKey}</td>)}
                            </tr>
                            <tr>
                              {subKeys1.map((subKey) => <td>{subTabledata1[subKey]}</td>)}
                            </tr>
                          </Table>
                        </td>
                      )
                    } else {
                      return (
                        <td>{data[keys[1]][0][key]}</td>
                      )
                    }

                  })}
              </tr>
            </tbody>
          </Table>

          {data[keys[2]].length !== 0 ?
            <>
              <h6 className="tablename">{keys[2]}</h6>
            </> : null}
        </Col>
      </Row>
    );
  }
}

export default Index;
