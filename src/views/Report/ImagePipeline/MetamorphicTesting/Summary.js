import React from "react";
import { Row, Col, Table } from "react-bootstrap";
// import { Doughnut, Bar } from 'react-chartjs-2';

const Index = (props) => {
  const { title, data } = props;
  const keys = Object.keys(data);
  var table1 = data["deviations_dict"];
  var table2 = data["success_dict"];
  var rowsTable1 = Object.keys(table1);
  var rowsTable2 = Object.keys(table2);
  const arr = [
    "Classname",
    "Brightness",
    "Rotation",
    "Shear",
    "txty",
    "zoom_xy",
  ];
  /*
    {
      Object.keys(table1[rowKey]).map((col, i) => {
        console.log(col);
        //(table1[rowKey][col]).join(", ")
        return (
          <td key={i}>{ col == 'brightness' ? 'brightness' : null }</td>
        );
      });
    }


    */
  const Spaces = (char, index) => {
    if (char === "%" && index > 0) {
      return `${char} `;
    }

    return char;
  };

  function Mystring(string) {
    return string.split("").map(Spaces).join("");
  }

  var rowsTable1Html = rowsTable1.map((rowKey, i) => {
    return (
      <tr key={i}>
        <td>{rowKey}</td>
        {
          //Object.keys(data[keys[2]][rowKey]).map((col, i) =>
          //<td key={i}>{(data[keys[2]][rowKey][col]).join(", ")}</td>)
          arr.slice(1).map((item) => (
            <td key={item}>
              {Mystring(
                data[keys[2]][rowKey][item.toLowerCase()]
                  ? data[keys[2]][rowKey][item.toLowerCase()].join(", ")
                  : "--"
              )}
            </td>
          ))
        }
      </tr>
    );
  });
  var rowsTable2Html = rowsTable2.map((rowKey, i) => {
    return (
      <tr key={i}>
        <td>{rowKey}</td>
        {
          //Object.keys(data[keys[4]][rowKey]).map((col, i) =>
          //<td key={i}>{(data[keys[4]][rowKey][col]).join(", ")}</td>)
          arr.slice(1).map((item) => (
            <td key={item}>
              {Mystring(
                data[keys[4]][rowKey][item.toLowerCase()]
                  ? data[keys[4]][rowKey][item.toLowerCase()].join(", ")
                  : "--"
              )}
            </td>
          ))
        }
      </tr>
    );
  });

  return (
    <Row id="meta-summary">
      <Col>
        <h6 className="subtitle">{title}</h6>
        <br />
        <br />
        {keys[1]} - {data[keys[1]]}
        <br />
        {keys[0]} - {data[keys[0]]}
        <br />
        {keys[3]} : {data[keys[3]]}
        <br />
        <br />
        {data[keys[2]][rowsTable1[0]] === undefined ? null : (
          <>
            <h6 className="tablename">Corner Cases</h6>
            <Table bordered responsive size="lg">
              <thead>
                <tr>
                  {arr.map((item) => (
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{rowsTable1Html}</tbody>
            </Table>
          </>
        )}
        <br />
        {data[keys[4]][rowsTable2[0]] === undefined ? null : (
          <>
            <h6 className="tablename">Normal Cases</h6>
            <Table bordered responsive size="lg">
              <thead>
                <tr>
                  {arr.map((item) => (
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{rowsTable2Html}</tbody>
            </Table>
          </>
        )}
      </Col>
    </Row>
  );
};

export default Index;
