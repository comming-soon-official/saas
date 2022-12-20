import React, { useEffect } from "react";
import Papa from "papaparse";
import { auth } from "services";
import { useState } from "react";
import "./style.css";
// import { MainNavbar } from "components";
import { Container } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { notification } from "antd";
import { MainNavbar } from "components";
let Currentuser = auth.getCurrentUser();

const Extractor = () => {
  const [tags, setTags] = useState([]);
  const [inputtagarray, setInputtagarray] = useState([]);
  const [target, setTarget] = useState("");
  const [destination, setDestination] = useState("");
  const [multipledatasets, setMultipledatasets] = useState([]);
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
    if (target === destination) {
      notification["error"]({
        message: "Error",
        description: "Target and Destination Tags Cannot Be Same",
        duration: 5,
      });
      return false;
    }
    if (Currentuser.get("maindataset") === undefined) {
      let hello = Currentuser.get("dataset");
      multipledatasets.push(hello);
      Currentuser.set("maindataset", multipledatasets);
      Currentuser.save().then(() => {
        console.log(Currentuser.get("maindataset"));
      });
    } else {
      let hello = Currentuser.get("maindataset");
      multipledatasets.push(hello);
      multipledatasets.push(Currentuser.get("dataset"));
      Currentuser.set("maindataset", multipledatasets);
      Currentuser.save().then(() => {
        console.log(Currentuser.get("maindataset"));
      });
    }
    // console.log(Currentuser.get("dataset"));
    fetch("http://127.0.0.1:12345/tags", {
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
      }),
    });
    console.log(target, destination);
  };
  useEffect(() => {
    console.log(Currentuser.id);
  }, []);
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
      <MainNavbar />
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
              {/* <div className="hello">
                {inputtagarray
                  ? inputtagarray.map((value, index) => {
                      return (
                        <span className="searchtag" key={index}>
                          {value}
                        </span>
                      );
                    })
                  : null}
              </div> */}
            </Form.Group>
          </Form>
          {/* <div className="tagboxoutside">
            {results.map((value, index) => {
              return (
                <span key={index} className="bodytag">
                  {value}
                </span>
              );
            })}

          </div> */}
          <br />
          <Button onClick={handleRun}>Run Pipeline</Button>
        </div>
      </div>
    </Container>
  );
};

export default Extractor;
