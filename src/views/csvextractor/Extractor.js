import React, { useEffect } from "react";
import Papa from "papaparse";
import { auth } from "services";
import { useState } from "react";
import "./style.css";
import Parse from "../../services/parseService";
// import { MainNavbar } from "components";
import { Container, NavDropdown } from "react-bootstrap";
import { Button, Form, Tabs, Tab } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

import { notification } from "antd";
import { MainNavbar } from "components";
import { dashboard } from "services/paths";
let Currentuser = auth.getCurrentUser();
const date = new Date().toLocaleString("en-us", {
  dateStyle: "medium",
  timeStyle: "short",
});
const Extractor = () => {
  const [tags, setTags] = useState([]);
  const [target, setTarget] = useState("");
  const [destination, setDestination] = useState("");
  const [tempobj, setTempobj] = useState(Currentuser.get("Projects"));
  const [CSVRow, setCSVRow] = useState(null);

  const projectmodal = Currentuser.get("modal") ? Currentuser.get("modal") : "";
  const projectembedded = Currentuser.get("embedded")
    ? Currentuser.get("embedded")
    : "";
  const projectTopic = Currentuser.get("topic") ? Currentuser.get("topic") : "";

  useEffect(() => {
    console.log(Currentuser.get("dataset"));
    Papa.parse(Currentuser.get("dataset"), {
      download: true,
      complete: function (data) {
        setTags(data.data[0]);
      },
    });
  }, []);
  const handleTargetSelect = (e) => {
    setTarget(e.target.value);
  };

  const handleDestinationSelect = (e) => {
    setDestination(e.target.value);
  };
  const SelectRows = (e) => {
    setCSVRow(e.target.value);
  };

  const handleRun = () => {
    console.log(date);
    const project = {
      id: uuidV4(),
      topic: projectTopic,
      // modal: projectmodal,
      // embedded: projectembedded,
      date: date,
      results: "",
      status: "",
    };
    const url = "http://13.233.122.188:5001/tags";
    const res = fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        input_col: target,
        target_col: destination,
        userid: Currentuser.id,
        Row: CSVRow,
      }),
    });

    if (res.status === 200) {
      setTempobj((prev) => {
        const newState = [...(prev || []), project];
        Currentuser.set("Projects", newState);
        Currentuser.save().then((res) => {
          console.log(res);
        });
        return newState;
      });
      notification["success"]({
        message: "Pipeline Started..!",
        description: "We shall mail you the results after completion",
        duration: 5,
      });
      setTimeout(() => {
        window.location = dashboard;
      }, 3000);
    } else {
      console.log("ok im");
      notification["error"]({
        message: "Error",
        description: "Server Can't Reachable",
        duration: 5,
      });
    }
    //   .then((res) => {
    //     console.log(res.status);
    //     setTempobj((prev) => {
    //       const newState = [...(prev || []), project];
    //       Currentuser.set("Projects", newState);
    //       Currentuser.save().then((res) => {
    //         console.log(res);
    //       });
    //       return newState;
    //     });
    //   })
    //   .then(() => {
    //     window.location = dashboard;
    //   })
    //   .catch((error) => {
    //     console.log("ok");

    //     notification["error"]({
    //       message: "Error",
    //       description: "Server Can't Reachable",
    //       duration: 5,
    //     });
    //     console.log(error.message);
    //   });
    // console.log(res);
  };

  return (
    <Container>
      <MainNavbar />
      <div>
        <div className="tagbox">
          <h2>Tags</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Input Tag</Form.Label>

              <div style={{ marginBottom: "8px" }}>
                <Form.Select onChange={handleTargetSelect}>
                  <option defaultValue={target}>
                    {"Select Your Input Tag"}
                  </option>
                  {tags.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </Form.Select>
                <br />
                <Form.Label>Select Target Tag</Form.Label>
                <Form.Select onChange={handleDestinationSelect}>
                  <option defaultValue={destination}>
                    {"Select Your Target Tag"}
                  </option>
                  {tags.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </Form.Select>
                <br />
                <Form>
                  <Tabs
                    defaultActiveKey="id"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="id" title="Row ID">
                      <Form.Label>Enter Row ID</Form.Label>
                      <Form.Control
                        onChange={SelectRows}
                        type="number"
                        placeholder="Eg: 6"
                        value={CSVRow}
                      />
                    </Tab>
                    <Tab eventKey="row" title="Row Text">
                      <Form.Label>Enter Row Text</Form.Label>
                      <Form.Control
                        onChange={SelectRows}
                        type="text"
                        placeholder="Eg: Gramite"
                        value={CSVRow}
                      />
                    </Tab>
                  </Tabs>
                </Form>
              </div>
            </Form.Group>
          </Form>

          <br />
          <Button className="runpipelinebtn" onClick={handleRun}>
            Run Pipeline
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Extractor;
