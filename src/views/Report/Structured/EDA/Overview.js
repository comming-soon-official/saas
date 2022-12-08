import React from "react";
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

const Index = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Row id="overview">
      <Col className="section">
        <Row>
          <Col md={6}>
            <table className="table table-dark table-striped table-borderless table-sm">
              <thead className="">
                <tr>
                  <th>Dataset Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Number of variables</td>
                  <td>{data.n}</td>
                </tr>
                <tr>
                  <td>Number of observations</td>
                  <td>{data.n}</td>
                </tr>
                <tr>
                  <td>Missing cells</td>
                  <td>{data.n_vars_all_missing}</td>
                </tr>
                <tr>
                  <td>Duplicate rows</td>
                  <td>{data.n}</td>
                </tr>
                <tr>
                  <td>Total size in memory</td>
                  <td>{data.memory_size}</td>
                </tr>
                <tr>
                  <td>Average record size in memory</td>
                  <td>{data.n}</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col md={6}>
            <table className="table table-dark table-striped table-borderless table-sm">
              <thead className="">
                <tr>
                  <th>Variable Types</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NUM</td>
                  <td>{data.types.Numeric}</td>
                </tr>
                <tr>
                  <td>CAT</td>
                  <td>{data.types.Categorical}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <h5 className="text-danger"><b>Warnings</b></h5>
            <p>Dataset has {data.n_duplicates} ({data.p_duplicates}%) duplicate rows</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default withTranslation("common")(Index);
