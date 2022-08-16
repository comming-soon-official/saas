import React, { useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { ExpandableTable } from '../../../../components';

const Index = (props) => {
  const { title, data } = props;
  const [size, setSize] = useState({ value: 3, msg: "Expand Table" });
  const keys = Object.keys(data);
  var table1Html = keys.slice(0, size.value).map((row, i) => {
    return (
      <tr key={i}>
        <td className="text">{data[i].Text}</td>
        <td>{data[i].Target}</td>
      </tr>
    );
  });

  var table1Header = (
    <tr>
      {Object.keys(data[keys[0]]).map((item, i) => <th key={i}>{item}</th>)}
    </tr>
  )

  const toggle = (e) => {
    if (e.target.id == "table1") {
      size.value === 3 ? setSize({ value: data.length - 1, msg: "Collapse Table" }) : setSize({ value: 3, msg: "Expand Table" });
    }
  }

  return (
    <Row id="head">
      <Col className="section">
        <ExpandableTable
          title={title}
          header={table1Header}
          body={table1Html}
          toggle={toggle}
          id="table1"
          msg={size.msg} />
      </Col>
    </Row>
  )
}
export default Index;
