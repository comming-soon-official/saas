import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Index extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    const { data } = this.props;
    const keys = Object.keys(data);
    return (
      <Row>
        <Col md={12}>
          <table className="table table-dark table-striped table-borderless table-sm">
            <thead>
              <tr>
                <th></th>
                {Object.keys(data[0]).map((rowHeader, i) => <th>{rowHeader}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => {
                  return (
                    <tr>
                      <td>{i}</td>
                      {Object.keys(row).map((column, j) => <td>{row[column]}</td>)}
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    );
  }
}

export default Index;
