import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

class Index extends React.Component {
  render(){
    const { title, data } = this.props;
    const keys = Object.keys(data);
    const headerKeys = Object.keys(data[keys[0]]);
    var tableHeader = headerKeys.map((key, i) => <th>{key}</th>);
    var tableHtml = keys.map((key, i) => {
      return (
        <tr key={i}>
          <td>{key}</td>
          <td>{data[key][headerKeys[0]]}</td>
          <td>{data[key][headerKeys[1]]}</td>
          <td>{data[key][headerKeys[2]]}</td>
          <td>{data[key][headerKeys[3]]}</td>
        </tr>
      );
    });
    return (
      <section>
        <h6 className="tablename">{title}</h6>
        <Table bordered responsive size="lg">
          <thead>
            <tr>
              <td></td>
              {tableHeader}
            </tr>
          </thead>
          <tbody>

            {tableHtml}
          </tbody>
        </Table>
      </section>
    )
  }
}

export default Index;
