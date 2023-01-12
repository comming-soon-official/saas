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

  const handleRun = async () => {
    const project = {
      id: uuidV4(),
      topic: projectTopic,
      // modal: projectmodal,
      // embedded: projectembedded,
      date: date,
      results: "",
      status: "",
    };

    setTempobj((prev) => {
      const newState = [...(prev || []), project];

      Currentuser.set("Projects", newState);
      Currentuser.save();

      return newState;
    });

    const res = await fetch("http://127.0.0.1:12345/tags", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        target: target,
        destination: destination,
        userid: Currentuser.id,
        Row: CSVRow,
      }),
    });

    if (res.status === 200) {
      console.log("data updated successfully");
    }

    window.location = dashboard;
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
                        type="email"
                        placeholder="Eg: 6"
                      />
                    </Tab>
                    <Tab eventKey="row" title="Row Text">
                      <Form.Label>Enter Row Text</Form.Label>
                      <Form.Control
                        onChange={SelectRows}
                        type="email"
                        placeholder="Eg: Gramite"
                      />
                    </Tab>
                  </Tabs>
                </Form>
              </div>
            </Form.Group>
          </Form>

          <br />
          <Button onClick={handleRun}>Run Pipeline</Button>
        </div>
      </div>
    </Container>
  );
};

export default Extractor;
