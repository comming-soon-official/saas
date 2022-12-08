import React, { useEffect } from "react";
import Papa from "papaparse";
import { auth } from "services";
import { useState } from "react";
import "./style.css";
// import { MainNavbar } from "components";
import { Container } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";

const Extractor = () => {
  const [tags, setTags] = useState([]);
  const [inputtagarray, setInputtagarray] = useState([]);
  const [target, setTarget] = useState("");
  const [destination, setDestination] = useState("");
  useEffect(() => {
    Papa.parse(auth.getCurrentUser().get("dataset"), {
      download: true,
      complete: function (data) {
        setTags(data.data[0]);
      },
    });
  }, []);
  // console.log(tags);

  var results = tags.filter(
    (row) => !inputtagarray.some((value) => row.includes(value))
  );

  const handleTargetSelect = (e) => {
    setTarget(e.target.value);
    setInputtagarray([...inputtagarray, e.target.value]);
  };

  const handleDestinationSelect = (e) => {
    setDestination(e.target.value);
    setInputtagarray([...inputtagarray, e.target.value]);
  };
  const handleRun = () => {
    console.log(target, destination);
  };
  // useEffect(() => {
  //   let csvRows = ["1", "2", "3", "4", "5", "6"];
  //   let searchTerms = ["1", "2", "3", "4"];
  //   var results = tags.filter(
  //     (row) => !inputtagarray.some((value) => row.includes(value))
  //   );
  //   console.log(results);
  // }, [inputtagarray]);
  return (
    <Container>
      <div>
        <div className="tagbox">
          <h2>Tags</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Target Tag</Form.Label>

              <div style={{ marginBottom: "8px" }}>
                <Form.Select onChange={handleTargetSelect}>
                  <option defaultValue={target}>
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
                <Form.Label>Select Destination Tag</Form.Label>

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
                {/* <Form.Control
                  type="email"
                  placeholder="Enter Target and Destination Tags"
                  value={inputtag}
                  onChange={(e) => {
                    setInputtag(e.target.value);
                  }}
                />
                <Button onClick={handleClick}>add</Button> */}
              </div>
              <div className="hello">
                {inputtagarray
                  ? inputtagarray.map((value, index) => {
                      return (
                        <span className="searchtag" key={index}>
                          {value}
                        </span>
                      );
                    })
                  : null}
              </div>
            </Form.Group>
          </Form>
          <div className="tagboxoutside">
            {results.map((value, index) => {
              return (
                <span key={index} className="bodytag">
                  {value}
                </span>
              );
            })}
            {/* {tags.map((value, index) => {
              return (
                <span className="bodytag" key={index}>
                  {value} <img src="./1.png" alt="" />
                </span>
              );
            })} */}
          </div>
          <br />
          <Button onClick={handleRun}>Run Pipeline</Button>
        </div>
      </div>
    </Container>
  );
};

export default Extractor;
