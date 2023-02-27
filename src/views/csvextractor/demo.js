import React, { useState, useEffect } from "react";
import { Container, Form, Tabs, Tab } from "react-bootstrap";
import { notification } from "antd";
import Papa from "papaparse";
import { v4 as uuidV4 } from "uuid";
import { auth } from "services";
import { MainNavbar } from "components";
import { dashboard } from "services/paths";
import Parse from "../../services/parseService";
import "./style.css";

const Extractor = () => {
  const [tags, setTags] = useState([]);
  const [target, setTarget] = useState("");
  const [destination, setDestination] = useState("");
  const [tempobj, setTempobj] = useState(auth.getCurrentUser().get("Projects"));
  const [CSVRow, setCSVRow] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    fontStyle: "italic",
    fontWeight: "bold",
  };

  const validate = () => {
    let errors = {};
    if (target === "" || target === "Select Your Input Tag") {
      errors.target = "Please Select Your Input Tag!";
    }
    if (destination === "" || destination === "Select Your Target Tag") {
      errors.destination = "Please Select Your Target Tag!";
    }
    if (CSVRow === null || CSVRow === "") {
      errors.CSVRow = "Please Input The Row ID or Row Text!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    setIsSubmit(true);
    if (Object.keys(errors).length === 0 && isSubmit) {
      handleRun();
      console.log("Form Submitted");
    }
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log("Form is Valid");
    }
  }, [errors]);

  useEffect(() => {
    isSubmit && setErrors(validate());
  }, [target, destination, CSVRow]);

  useEffect(() => {
    Papa.parse(auth.getCurrentUser().get("dataset"), {
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
    const date = new Date().toLocaleString("en-us", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    const project = {
      id: uuidV4(),
      topic: auth.getCurrentUser().get("topic") || "",
      date,
      results: "",
      status: "",
    };
    const url = "http://middleman.aiensured.com/tags";
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
        userid: auth.getCurrentUser().id,
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
    } else {
      console.log("hello");
    }
  };

  return (
    <>
      {" "}
      <Container>
        <MainNavbar />
        <div className="tagbox">
          <h2>Tags</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Input Tag</Form.Label>
              <div style={{ marginBottom: "8px" }}>
                <Form.Select
                  onChange={handleTargetSelect}
                  defaultValue={target}
                >
                  <option disabled>Select Your Input Tag</option>
                  {tags.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </Form.Select>
                <Form.Text style={errorStyle}>{errors.target}</Form.Text>
              </div>

              <Form.Label>Select Target Tag</Form.Label>
              <div style={{ marginBottom: "8px" }}>
                <Form.Select
                  onChange={handleDestinationSelect}
                  defaultValue={destination}
                >
                  <option disabled>Select Your Target Tag</option>
                  {tags.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </Form.Select>
                <Form.Text style={errorStyle}>{errors.destination}</Form.Text>
              </div>

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
              <Form.Text style={errorStyle}>{errors.CSVRow}</Form.Text>
            </Form.Group>
          </Form>
          <Button className="runpipelinebtn" onClick={handleSubmit}>
            Run Pipeline
          </Button>
        </div>
      </Container>
    </>
  );
};

export default CSV;
