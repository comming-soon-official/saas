import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "./style.css";
import { MainNavbar } from "../../../components";
import { auth } from "services";
import { home, report } from "services/paths";

const currentUser = auth.getCurrentUser();

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "completed";
    case "error":
      return "error";
    case "pending":
      return "pending";
    default:
      return "waiting";
  }
};

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const userProjects = currentUser.get("Projects");
    setProjects(userProjects);
  }, []);

  const renderProjectRow = (project, index) => (
    <tr key={index}>
      <td>{project?.topic}</td>
      <td>{project?.date}</td>
      <td className={getStatusColor(project?.status)}>
        {project?.status || "waiting"}
      </td>
      <td>
        {project?.results !== "" ? (
          <Button onClick={() => (window.location = report)} size="sm">
            View Report
          </Button>
        ) : (
          "No Results"
        )}
      </td>
    </tr>
  );

  return (
    <>
      <MainNavbar />
      <Container style={{ marginTop: 40 }}>
        <div className="page-header"></div>
        <Row>
          <Col>
            <h3 className="page-title">Dashboard</h3>

            {projects.length > 0 ? (
              <div className="table-responsive">
                <Table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Execution Date</th>
                      <th>Status</th>
                      <th>Results</th>
                    </tr>
                  </thead>
                  <tbody>{projects.map(renderProjectRow)}</tbody>
                </Table>
              </div>
            ) : (
              <h1>No Projects Available</h1>
            )}
            <Button onClick={() => (window.location = home)}>
              Start Building Project
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
