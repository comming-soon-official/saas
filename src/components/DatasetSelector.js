import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { auth } from "services";

const DatasetSelector = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const api = auth.getCurrentUser().get("Projects");
  const choiceSelect = (event) => {
    const { choice } = props;
    choice(event.target.attributes.getNamedItem("data-key").value);
  };

  if (!api) return null;
  return (
    <div className="row selector">
      <div className="col-md-12">
        <Dropdown
          aria-label="Dataset Selector"
          onClick={(e) => {
            setSelectedItem(e.target.innerText);
          }}
        >
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {selectedItem ? selectedItem : api[0].Topic.toUpperCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu onClick={choiceSelect}>
            {api.map((item, i) => (
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

export default DatasetSelector;
