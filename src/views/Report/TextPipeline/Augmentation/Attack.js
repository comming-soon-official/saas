import React, { useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { ExpandableTable } from "../../../../components";

const Index=(props)=> {
    const { data } = props;
    const [size, setSize] = useState({ value: 1, msg: "Expand Table"});
    const tableData = data["data"];
    const tableHeader = (
      <tr>{Object.keys(tableData[0]).map((row) => <th>{row.toUpperCase()}</th>)}</tr>
    );
    var tableHtml = tableData.slice(0,size.value).map((row) => {
      const keys = Object.keys(row);
      return (
        <tr>
          {keys.map((key) => <td>{row[key]}</td>)}
        </tr>
      )
    });
    const toggle = (e) => {
      console.log(e.target.id);
      if(e.target.id == "table1") {
        size.value === 1 ? setSize({value: tableData.length - 1, msg: "Collapse Table"}) : setSize({ value: 1, msg: "Expand Table"});
      }
    }
    return (
      <Row className="section">
        <Col>
          <p>{data.one_liner}</p>
          <ExpandableTable
            title=""
            header={tableHeader}
            body={tableHtml}
            toggle={toggle}
            id="table1"
            msg={size.msg} />
        </Col>
      </Row>
    );
}

export default Index;
