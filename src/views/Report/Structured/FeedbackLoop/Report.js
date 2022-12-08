import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

class Index extends React.Component {
  render(){
    const { title, data } = this.props;
    const keys = Object.keys(data);

    return (
      <section>
        <h6 className="tablename">{title}</h6>
        <Table bordered responsive size="sm">
          <tbody>
            <tr>
              <td>{keys[0]}</td>
              <td>{data[keys[0]]}</td>
            </tr>
            <tr>
              <td>{keys[1]}</td>
              <td>{data[keys[1]]}</td>
            </tr>
            <tr>
              <td>{keys[2]}</td>
              <td>{data[keys[2]]}</td>
            </tr>
          </tbody>
        </Table>
      </section>
    )
  }
}

export default Index;
