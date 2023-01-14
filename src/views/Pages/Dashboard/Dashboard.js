import React, { useEffect, useState } from "react";
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
import { MainNavbar } from "../../../components";
import { auth } from "services";
import { home, report } from "services/paths";
const Curretuser = auth.getCurrentUser();

const Dashboard = () => {
  const [pickproject, setPickproject] = useState(0);
  const [statusColor, setStatusColor] = useState("");
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    setDatas(() => Curretuser.get("Projects"));
  }, [datas]);

  // const [projectdata, setProjectData] = useState([
  //   {
  //     key: 1,
  //     name: "jacob",
  //     product: "Object Detection",
  //     createdtime: "28 aug 22",
  //     status: "completed",
  //   },
  //   {
  //     key: 2,
  //     name: "fine",
  //     product: "photo",
  //     createdtime: "10 aug 22",
  //     status: "pending",
  //   },
  //   {
  //     key: 3,
  //     name: "ookie",
  //     product: "Image",
  //     createdtime: "02 sep 22",
  //     status: "error",
  //   },
  //   {
  //     key: 4,
  //     name: "heydude",
  //     product: "Video",
  //     createdtime: "20 sep 22",
  //     status: "completed",
  //   },
  // ]);

  const [infoprojectdata, setInfoProjectData] = useState([
    [
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
      {
        key: 6,
        stages: "Performance Testaing",
        createdtime: "12pm",
        runtime: 30,
        status: "error",
      },
      {
        key: 7,
        stages: "Biases Loop",
        createdtime: "12pm",
        runtime: 30,
        status: "error",
      },
    ],
    [
      {
        key: 1,
        stages: "Attack Vector",
        createdtime: "5:30pm",
        runtime: 90,
        status: "sucess",
      },
      {
        key: 2,
        stages: "Data Diagonastic",
        createdtime: "1pm",
        runtime: 100,
        status: "pending",
      },
      {
        key: 3,
        stages: "Modelling Pipeline",
        createdtime: "2am",
        runtime: 500,
        status: "running",
      },
      {
        key: 4,
        stages: "Metamorpic Testing",
        createdtime: "3am",
        runtime: 70,
        status: "completed",
      },
      {
        key: 5,
        stages: "Feedback Loop",
        createdtime: "1am",
        runtime: 3000,
        status: "error",
      },
    ],
  ]);

  const color = ["#e32222", "#32e322", "#be534"];

  const projectTable = () => {
    return datas.map((val, i) => {
      // if (projectdata[i]?.status === "completed") {
      //   setStatusColor("#32e322");
      // } else if (projectdata[i]?.status === "pending") {
      //   setStatusColor("#ebe534");
      // } else if (projectdata[i]?.status === "error") {
      //   setStatusColor("#e32222");
      // }
      return (
        <tr
          key={i}
          onClick={() => {
            setPickproject(i);
          }}
        >
          <td>{val?.topic}</td>
          <td>{val?.date}</td>
          <td
            style={{
              color:
                val?.status === "completed"
                  ? "#32e322"
                  : val?.status === "error"
                  ? "#e32222"
                  : val?.status === "pending"
                  ? "#ebe534"
                  : "#000",
            }}
          >
            {val?.status ? val.status : "null"}
          </td>
          <td>
            {val?.status === "completed" ? (
              <Button onClick={() => (window.location = report)} size="sm">
                View Report
              </Button>
            ) : null}
          </td>
        </tr>
      );
    });
  };

  const informationTable = () => {
    return infoprojectdata[pickproject].map((val, i) => {
      return (
        <tr key={i}>
          <td>{val?.stages}</td>
          <td>{val?.createdtime}</td>
          <td>{(val?.runtime / 60).toFixed(2)}min</td>
          <td>{val?.status}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <MainNavbar />
      <div style={{ margin: 40 }}>
        <div className="page-header"></div>
        <Row>
          <Col
          // lg={6} className="projecttable grid-margin stretch-card"
          >
            <h3 className="page-title"> Dashboard </h3>
            {/* <Card>
              <Card.Body>
                <Card.Title>Project Tables</Card.Title>
                <Card.Text>
                  <code>List of projects</code>
                </Card.Text> */}
            {datas ? (
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
            ) : (
              <h1>No Projects Available</h1>
            )}
            <Button
              onClick={() => {
                window.location = home;
              }}
            >
              Start Building Project
            </Button>
            {/* {infoprojectdata[pickproject] ? (
                  <Button
                    style={{ float: "right" }}
                    onClick={() => {
                      window.location = results;
                    }}
                  >
                    View Report
                  </Button>
                ) : null} */}
            {/* </Card.Body>
            </Card> */}
            <br />
          </Col>
          {/* <Col lg={6} className="grid-margin stretch-card">
            <Card>
              <Card.Body>
                <Card.Title>Information Tables</Card.Title>
                <Card.Text>
                  <code>Project Information</code>
                </Card.Text>
                {datas && infoprojectdata[pickproject] ? (
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
                ) : (
                  <h1>No Project Information</h1>
                )}
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </div>
    </>
    // <div className="Dashboardcontainer">
    //   <div className="basicDashboard1">
    //     <Card>
    //       <Card.Header>
    //         <h3>Dashboard</h3>
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

export default Dashboard;
