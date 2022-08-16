import React, { useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { Gallery, ExpandableTable } from '../../../../components';

const Index=(props) =>{
  const { title, data, path } = props;
  const [size1, setSize1] = useState({ value: 3, msg: "Expand Table"});
  const [size2, setSize2] = useState({ value: 3, msg: "Expand Table"});
  const keys = Object.keys(data);
  const subKeys = Object.keys(data[keys[1]]);
  const tabledata1 = data[keys[1]][subKeys[0]];
  const tabledata2 = data[keys[1]][subKeys[1]];
  const keys1 = Object.keys(tabledata1[0]);
  const keys2 = Object.keys(tabledata2[0]);

  const table1Header = (
    <tr>{keys1.map((key) => <td><b>{key.toUpperCase()}</b></td>)}</tr>
  );
  const table1Html = tabledata1.slice(0,size1.value).map((row) => <tr>{Object.keys(row).map((col) => <td>{row[col]}</td>)}</tr>);

  const table2Header = (
    <tr>{keys2.map((key) => <td><b>{key.toUpperCase()}</b></td>)}</tr>
  );
  const table2Html = tabledata2.slice(0,size2.value).map((row) => <tr>{Object.keys(row).map((col) => <td>{row[col]}</td>)}</tr>);

  const toggle = (e) => {
    if(e.target.id == "table1") {
      size1.value === 3 ? setSize1({value: tabledata1.length - 1, msg: "Collapse Table"}) : setSize1({ value: 3, msg: "Expand Table"});
    } else {
      size2.value === 3 ? setSize2({value: tabledata2.length - 1, msg: "Collapse Table"}) : setSize2({value: 3, msg: "Expand Table"});
    }
  }

  return(
    <Row id="biastechniques">
      <Col md={12} className="section">
        <h2 className="title">{title}</h2><br />
        <ul class="list-unstyled">
          <li>
            <h6 className="subtitle">{keys[0]}</h6>
            <Gallery
              data={data[keys[0]]}
              path={path} />
          </li>
          <li>
            <h6 className="subtitle">{keys[1]}</h6>
            <ExpandableTable
              title={subKeys[0]}
              header={table1Header}
              body={table1Html}
              toggle={toggle}
              id="table1"
              msg={size1.msg} />
            <br /><br />
            <ExpandableTable
              title={subKeys[1]}
              header={table2Header}
              body={table2Html}
              toggle={toggle}
              id="table2"
              msg={size2.msg} />
          </li>
        </ul>
      </Col>
    </Row>
  )
}

export default Index;
