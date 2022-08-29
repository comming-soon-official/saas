import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";
import "./style.css";

const Report = () => {
  const [projectdata, setProjectData] = useState([
    {
      key: 1,
      name: "jacob",
      product: "photoshop",
      createdtime: "28 aug 22",
      status: "error",
    },
    {
      key: 2,
      name: "fine",
      product: "photo",
      createdtime: "10 aug 22",
      status: "pending",
    },
    {
      key: 3,
      name: "ookie",
      product: "something",
      createdtime: "02 sep 22",
      status: "pending",
    },
    {
      key: 4,
      name: "heydude",
      product: "emnblem",
      createdtime: "20 sep 22",
      status: "completed",
    },
  ]);

  const [infoprojectdata, setInfoProjectData] = useState([
    {
      key: 1,
      stages: "Attack Vector",
      createdtime: "3:30pm",
      runtime: 5,
      status: "error",
    },
    {
      key: 2,
      stages: "Data Diagonastic",
      createdtime: "4pm",
      runtime: 300,
      status: "pending",
    },
    {
      key: 3,
      stages: "Modelling Pipeline",
      createdtime: "1am",
      runtime: 30,
      status: "running",
    },
    {
      key: 4,
      stages: "Metamorpic Testing",
      createdtime: "10am",
      runtime: 700,
      status: "completed",
    },
    {
      key: 5,
      stages: "Feedback Loop",
      createdtime: "12pm",
      runtime: 30,
      status: "error",
    },
  ]);
  const projectTable = () => {
    return projectdata.map((val, i) => {
      return (
        <tr key={i}>
          <td>{val.product}</td>
          <td>{val.createdtime}</td>
          <td>{val.status}</td>
        </tr>
      );
    });
  };
  const informationTable = () => {
    return infoprojectdata.map((val, i) => {
      return (
        <tr key={i}>
          <td>{val.stages}</td>
          <td>{val.createdtime}</td>
          <td>{(val.runtime / 60).toFixed(2)}min</td>
          <td>{val.status}</td>
        </tr>
      );
    });
  };
  return (
    <div style={{ margin: 30 }}>
      <div className="page-header">
        <h3 className="page-title"> Report Tables </h3>
      </div>
      <Row>
        <Col lg={6} className="grid-margin stretch-card">
          <Card>
            <Card.Body>
              <Card.Title>Project Tables</Card.Title>
              <Card.Text>
                <code>List of projects</code>
              </Card.Text>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Execution Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{projectTable()}</tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
          <br />
        </Col>
        <Col lg={6} className="grid-margin stretch-card">
          <Card>
            <Card.Body>
              <Card.Title>Information Tables</Card.Title>
              <Card.Text>
                <code>Project Information</code>
              </Card.Text>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Stages</th>
                      <th>Ececuted Time</th>
                      <th>Run Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{informationTable()}</tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    // <div className="reportcontainer">
    //   <div className="basicreport1">
    //     <Card>
    //       <Card.Header>
    //         <h3>Report</h3>
    //       </Card.Header>
    //       <Card.Body>
    //         <Table responsive>
    //           <thead>
    //             <tr>
    //               <th>Execution Number</th>
    //               <th>Project Name</th>
    //               <th>Executed Date</th>
    //               <th>Status</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td>1</td>
    //               <td>Text</td>
    //               <td>27 May 22</td>
    //               <td>completed</td>
    //             </tr>
    //           </tbody>
    //         </Table>
    //       </Card.Body>
    //     </Card>
    //   </div>
    // </div>
  );
};

export default Report;
