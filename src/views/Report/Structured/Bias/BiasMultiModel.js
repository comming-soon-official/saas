import React from "react";
import { Row, Col, Table } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

const Bias_MultiModel = (props) => {
  const table = props.data["Bias Multimodel"][0];
  const keys = Object.keys(table);
  return (
    <Row>
      <Col md={12}>
        <h6 className="subtitle">{props.title}</h6>
        <p>{props.data.one_liner}</p>
        <h6 className="subtitle">Bias Multimodel</h6>
        <Table bordered responsive size="sm">
          <thead>
            {keys.map((rowKey, i) => <th key={i}>{rowKey}</th>)}
          </thead>
          <tbody>
            <tr>{ keys.map((key, i) => <td key={i}>{table[key]}</td>) }</tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Bias_MultiModel);
