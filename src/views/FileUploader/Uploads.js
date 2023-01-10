import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
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
  const [loggineduser, setLoggineduser] = useState(null);

  var CurrentUser = auth.getCurrentUser();

  var authData = CurrentUser ? CurrentUser.get("authData") : null;
  useEffect(() => {
    if (auth.getCurrentUser()) {
      console.log(auth.getCurrentUser());
      return;
    } else {
      auth.ParseAnonymousUser();
    }
  }, []);
  useEffect(() => {
    if (authData !== undefined && authData?.anonymous !== undefined) {
      console.log("Non Loginned User");
      setLoggineduser(false);
    } else if (CurrentUser) {
      console.log("Loginned User");
      setLoggineduser(true);
    } else {
      console.log("anon user");
      setLoggineduser(false);
    }
  }, []);

  const logout = () => {
    Parse.User.logOut();
    window.location = "/login";
  };

  const onFileChangeDataset = (file) => {
    setProgress(0);
    auth.FileuploadDataset(file).then((data) => {
      setProgress(data);
    });
  };
  const onFileChangeModal = (file) => {
    setProgress(0);
    auth.FileuploadModal(file).then((data) => {
      setProgress(data);
    });
  };
  const onFileChangeEmbedded = (file) => {
    setProgress(0);
    auth.FileuploadEmbedded(file).then((data) => {
      setProgress(data);
    });
  };
  return (
    <div>
      <MainNavbar />
      <Container fluid>
        <div className="draggerbox">
          <div className="filecomponentbox">
            <div className="fileuploadbox">
              <Upload.Dragger
                accept=".csv"
                multiple={true}
                name="file"
                className="uploadbox"
                showUploadList={true}
                maxCount={1}
                beforeUpload={onFileChangeDataset}
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/csv-1832607-1552247.png"
                  alt="modal"
                  width={100}
                  height={100}
                />

                {/* <p className="ant-upload-text">Click or drag file to Upload</p> */}
                <p>Upload your Dataset</p>
              </Upload.Dragger>
            </div>
            <div className="fileuploadbox">
              <Upload.Dragger
                multiple={true}
                name="file"
                className="uploadbox"
                showUploadList={true}
                maxCount={1}
                beforeUpload={onFileChangeModal}
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/ai-66-433729.png"
                  alt="csv"
                  width={100}
                  height={100}
                />
                {/* <p className="ant-upload-text">Click or drag file to Upload</p> */}

                <p>Upload Your Modal (Optional) </p>
              </Upload.Dragger>
            </div>
            <div className="fileuploadbox">
              <Upload.Dragger
                multiple={true}
                name="file"
                className="uploadbox"
                showUploadList={true}
                maxCount={1}
                beforeUpload={onFileChangeEmbedded}
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/embedded-2082810-1750241.png"
                  alt="embedded"
                  width={100}
                  height={100}
                />
                {/* <p className="ant-upload-text">Click or drag file to Upload</p> */}

                <p>Upload Embedded Support file (Optional) </p>
              </Upload.Dragger>
            </div>
          </div>
          <div>
            {progress ? (
              <div className="progressposition">
                <Progress
                  type="circle"
                  percent={progress}
                  format={(percent) => `${percent + "%"}`}
                />
              </div>
            ) : null}
            {progress ? (
              <ComponentModal
                loggineduser={loggineduser}
                className="modalswitchbutton"
              />
            ) : null}
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
      </Container>
    </div>
  );
};

export default Uploads;
