import React, { useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { ExpandableTable } from "components";
// import {Gallery} from 'react-grid-gallery';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Index = (props) => {
  const { title, data } = props;
  const [size, setSize] = useState({ value: 2, msg: "Expand Table" });
  var keys = Object.keys(data);
  var tableData = data[keys[1]].data;
  const tableHeader = Object.keys(tableData[0]).map((rowHeader, i) => <th key={i}>{rowHeader.toUpperCase()}</th>);
  const tableHtml = tableData.slice(0, size.value).map((row, i) => <tr>{Object.keys(row).map((col) => <td>{row[col]}</td>)}</tr>);
  const toggle = (e) => {
    if (e.target.id == "table1") {
      size.value === 2 ? setSize({ value: tableData.length - 1, msg: "Collapse Table" }) : setSize({ value: 2, msg: "Expand Table" });
    }
  }

  return (
    <section id="counterfactuals">
      <Row>
        <Col md={12}>
          <h2 className="title">{title}</h2>
        </Col>
      </Row>
      <br />
      <p>{data.one_liner}</p>
      <Row>
        <Col md={12}>
          <ExpandableTable
            title=""
            header={tableHeader}
            body={tableHtml}
            toggle={toggle}
            id="table1"
            msg={size.msg} />
        </Col>
      </Row>
      <br />
    </section>
  );
}

export default Index;
