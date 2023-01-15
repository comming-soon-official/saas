import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
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
const Uploads = ({ setProgress, progress }) => {
  const [loggineduser, setLoggineduser] = useState(null);
  var CurrentUser = auth.getCurrentUser();
  useEffect(() => {
    console.log(progress);
  }, [progress]);
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
      <div className="draggerbox">
        <Stack gap={3}>
          <div>
            <Upload.Dragger
              accept=".csv"
              name="file"
              className="uploadbox"
              showUploadList={true}
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
          <div>
            <Upload.Dragger
              name="file"
              className="uploadbox"
              showUploadList={true}
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
          <div>
            <Upload.Dragger
              name="file"
              className="uploadbox"
              showUploadList={true}
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
          <div>
            {progress ? (
              <div className="section1">
                <div className="progressposition">
                  <Progress
                    percent={progress}
                    format={(percent) => `${percent + "%"}`}
                  />
                  <ComponentModal
                    loggineduser={loggineduser}
                    className="modalswitchbutton"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Uploads;
