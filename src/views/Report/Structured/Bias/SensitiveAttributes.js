import React from "react";
import { Row, Col, Table } from 'react-bootstrap';
// import Attack from './Attack';
import { withTranslation } from 'react-i18next';

const Sensitive_Attributes = (props) => {
  const table = props.data["Bias variables"];
  const keys = Object.keys(table);
  return (
    <Row>
      <Col md={12}>
        <h6 className="subtitle">{props.title}</h6>
        <p>{props.data.one_liner}</p>
        <h6 className="tablename">Bias variables</h6>
        { table != null ? <Table bordered responsive size="sm">
          <thead>
            {keys.map((rowKey, i) => <th key={i}>{rowKey}</th>)}
          </thead>
          <tbody>
            <tr>{ keys.map((key, i) => <td key={i}>{table[key]}</td>) }</tr>
          </tbody>
        </Table> : null }
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Sensitive_Attributes);
