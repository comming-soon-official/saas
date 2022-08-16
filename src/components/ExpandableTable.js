import React, { useState } from "react";
import { Table, Row, Col, Button } from "react-bootstrap";

function ExpandableTable(props){
  return (
    <Row>
      <Col>
        <h6 className="tablename">{props.title}</h6>
        <Table bordered responsive size="sm">
          <thead>
            {props.header}
          </thead>
          <tbody>
            {props.body}
          </tbody>
        </Table>
        <a className="btn btn-link float-end fst-italic"
          onClick={props.toggle} id={props.id}>
          {props.msg}
        </a>
      </Col>
    </Row>
  )
}
export default ExpandableTable;
