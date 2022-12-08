import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Gallery } from "components";

const Index = (props) => {
  const { title, data, path } = props;
  const keys = Object.keys(data);
  console.log(keys);
  console.log(path);
  let tableData = data["Final Summary"]["summary"];
  let dataKeys = Object.keys(tableData);
  let columns = Object.keys(tableData[dataKeys[0]]);
  let tableHtml = dataKeys.map((key) => {
    const subKeys = Object.keys(tableData[key]);
    console.log(subKeys);
    return (
      <tr>
        <td>{key}</td>
        console.log(key);
        {subKeys.map((subkey) => (
          <td>{tableData[key][subkey]}</td>
        ))}
      </tr>
    );
  });
  //   console.log(columns);
  //   console.log(dataKeys);
  //   console.log(tableData);
  //   console.log(data);
  return (
    <>
      <Row id="debiasing">
        <Col className="section">
          <h2 className="title">{title} </h2>
          <h6 className="tablename">{keys[0]}</h6>
          <p>{`${data[keys[0]].one_liner}`}</p>
          <Gallery data={data[keys[0]]} path={path} />
          <h6 className="tablename">{keys[1]}</h6>
          <p>{`${data[keys[1]].one_liner}`}</p>
          <section>
            <Row>
              <Col md={12}>
                <Table bordered responsive size="sm">
                  <thead>
                    <tr>
                      <th></th>
                      {columns.map((colheaders, i) => (
                        <th key={i}>{colheaders}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>{tableHtml}</tbody>
                </Table>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default Index;
