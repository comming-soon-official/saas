import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { auth } from "services";

const Index = ({ datasetSelector, setDatasetSelector }) => {
  const hello = auth.getCurrentUser().get("Projects");
  return (
    <div className="row selector">
      <div className="col-md-12">
        <Dropdown
          aria-label="Dataset Selector"
          onClick={(e) => {
            setDatasetSelector(() => console.log(e.target.innerText));
            return e.target.innerText;
          }}
        >
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {datasetSelector ? datasetSelector : hello[0].Topic.toUpperCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {hello.map((item, i) => (
              <Dropdown.Item data-key={++i} key={i}>
                {item.Topic.toUpperCase()}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Index;
