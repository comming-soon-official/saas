import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Progress, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import Parse from "../../services/parseService";
// import DropFileInput from "./DropFileInput";
import { auth } from "../../services";
import ComponentModal from "../../components/Modal";
import MainNavbar from "../../components/Navbar";
import "./Uploader.css";
import "../../App.scss";
import Report from "../Pages/Report";
import { Link } from "react-router-dom";

var CurrentUser = auth.getCurrentUser();

const Uploads = () => {
  const [progress, setProgress] = useState(0);
  const [filname, setFilename] = useState("");
  const logout = () => {
    Parse.User.logOut();
    window.location = "/login";
  };

  const onFileChange = (file) => {
    setProgress(0);
    setFilename("");

    var parseFile = new Parse.File(file.name, file);
    setFilename(file.name);
    parseFile
      .save({
        progress: (value) => {
          setProgress(Math.round(value * 100));
        },
      })
      .then(
        function (ok) {
          console.log(ok);
        },
        function (error) {
          console.log(error);
        }
      );
    var newStore = new Parse.Object("File");
    newStore.set("File", parseFile);
    newStore.save();
    return false;
  };
  return (
    <div>
      <MainNavbar logout={logout} />
      <div className="draggerbox">
        <Upload.Dragger
          className="uploadbox"
          showUploadList={false}
          beforeUpload={onFileChange}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Upload.Dragger>
        {progress ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{filname}</p> <Progress percent={progress} />
          </div>
        ) : null}
        {progress ? <ComponentModal /> : null}
      </div>
      {/* <div className="primary">
        <div className="box">
          <h2 className="header">React drop files input</h2>
          <DropFileInput onFileChange={(files) => onFileChange(files)} />
          {progress ? <Progress percent={progress} /> : null}
          {progress ? <ComponentModal /> : null}
        </div>
      </div> */}
    </div>
  );
};

export default Uploads;
