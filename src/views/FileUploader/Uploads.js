import React, { useEffect, useState } from "react";
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

var CurrentUser = auth.getCurrentUser();
// var CurrentUser = Parse.User.current();
// var authData = CurrentUser ? CurrentUser.get("authData") : null;
// if (authData !== undefined && authData.anonymous !== undefined) {
//   console.log("#### User is anonymous");
// } else if (authData === undefined) {
//   console.log("not anonymous");
// }

// if (CurrentUser) {
//   if () {
//     console.log("undefined");
//   }
// } else {
//   console.log("not undefined");
// }

const Uploads = () => {
  const [progress, setProgress] = useState(0);
  const [filname, setFilename] = useState("");

  useEffect(() => {
    if (CurrentUser) {
      console.log(CurrentUser);
    } else {
      auth.ParseAnonymousUser();
    }
  }, []);

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
          console.log(Math.round(value * 100));
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
        <div className="filecomponentbox">
          <div className="fileuploadbox">
            <Upload.Dragger
              multiple={true}
              name="file"
              className="uploadbox"
              showUploadList={true}
              maxCount={1}
              beforeUpload={onFileChange}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to Upload</p>
              <p>Upload your ModalFile</p>
            </Upload.Dragger>
          </div>
          <div className="fileuploadbox">
            <Upload.Dragger
              multiple={true}
              name="file"
              className="uploadbox"
              showUploadList={true}
              maxCount={1}
              beforeUpload={onFileChange}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to Upload</p>
              <p>Upload Dataset (Optional) </p>
            </Upload.Dragger>
            {progress ? (
              <div
                className="progressposition"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Progress
                  type="circle"
                  percent={progress}
                  format={(percent) =>
                    `${percent === 100 ? "done" : percent + "%"}`
                  }
                />
              </div>
            ) : null}
            {progress ? <ComponentModal /> : null}
          </div>
        </div>
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
