import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { auth } from "services";

const DatasetSelector = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const api = auth.getCurrentUser().get("Projects");
  const choiceSelect = (event) => {
    const { choice } = props;
    console.log(choice);
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
            {selectedItem ? selectedItem : api[0].results.toUpperCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu onClick={choiceSelect}>
            {api.map((item, i) => (
              <>
                {item.results ? (
                  <Dropdown.Item data-key={++i} key={i}>
                    {item.results}
                  </Dropdown.Item>
                ) : null}
              </>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default DatasetSelector;
