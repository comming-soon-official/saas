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

const Uploads = ({ setAllProgress, allProgress }) => {
  var CurrentUser = auth.getCurrentUser();

  const logout = () => {
    Parse.User.logOut();
    window.location = "/login";
  };

  const onFileChangeDataset = (file, dbname) => {
    let roundvalue = 0;
    let parseFile = new Parse.File(file.name, file);
    return parseFile
      .save({
        progress: (value) => {
          roundvalue = Math.round(value * 100);
          setAllProgress((prev) => {
            const newState = [...prev];
            if (dbname === "dataset") {
              newState[0].progressbar = roundvalue;
              return newState;
            } else if (dbname === "modal") {
              newState[1].progressbar = roundvalue;
              return newState;
            } else if (dbname === "embedded") {
              newState[2].progressbar = roundvalue;
              return newState;
            }
            return newState;
          });
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res._url);

        auth.getCurrentUser().set(dbname, res._url);
        auth.getCurrentUser().save();
        var newStore = new Parse.Object("File");
        newStore.set("File", parseFile);
        newStore.save();
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    // auth.FileuploadDataset(file, "dataset").then((data) => {
    //   setAllProgress((prev) => {
    //     const newState = [...prev];
    //     newState[0].progressbar = data;
    //     return newState;
    //   });
    //   if (data === 100) {
    //     setAllProgress((prev) => {
    //       const newState = [...prev];
    //       newState[0].completed = true;
    //       return newState;
    //     });
    //   }
    // });
  };
  const onFileChangeModal = (file) => {
    auth.FileuploadDataset(file, "modal").then((data) => {
      setAllProgress((prev) => {
        const newState = [...prev];
        newState[1].progressbar = data;
        return newState;
      });
      if (data === 100) {
        setAllProgress((prev) => {
          const newState = [...prev];
          newState[1].completed = true;
          newState[0].btnloading = false;
          return newState;
        });
      }
    });
  };
  const onFileChangeEmbedded = (file) => {
    auth.FileuploadDataset(file, "embedded").then((data) => {
      setAllProgress((prev) => {
        const newState = [...prev];
        newState[2].progressbar = data;
        return newState;
      });
      if (data === 100) {
        setAllProgress((prev) => {
          const newState = [...prev];
          newState[0].completed = true;
          return newState;
        });
      }
    });
  };
  return (
    <div>
      <div className="draggerbox">
        <Stack gap={3}>
          {allProgress[0].showdataset ? (
            <div>
              <Upload.Dragger
                accept=".csv"
                name="file"
                className="uploadbox"
                showUploadList={true}
                beforeUpload={(file) => onFileChangeDataset(file, "dataset")}
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/csv-1832607-1552247.png"
                  alt="modal"
                  width={100}
                  height={100}
                />

                {/* <p className="ant-upload-text">Click or drag file to Upload</p> */}
                <p>
                  {!allProgress[0].completed
                    ? "Upload your Dataset"
                    : "Click to Reupload Dataset"}
                </p>
              </Upload.Dragger>

              {allProgress[0].progressbar ? (
                <Progress
                  className="progressbarinuploads"
                  percent={allProgress[0].progressbar}
                  format={(percent) => `${percent + "%"}`}
                />
              ) : null}
            </div>
          ) : null}
          <div>
            <Upload.Dragger
              name="file"
              className="uploadbox"
              showUploadList={true}
              beforeUpload={(file) => onFileChangeDataset(file, "modal")}
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
            {allProgress[1].progressbar ? (
              <Progress
                className="progressbarinuploads"
                percent={allProgress[1].progressbar}
                format={(percent) => `${percent + "%"}`}
              />
            ) : null}
          </div>
          <div>
            <Upload.Dragger
              name="file"
              className="uploadbox"
              showUploadList={true}
              beforeUpload={(file) => onFileChangeDataset(file, "embedded")}
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
            {allProgress[2].progressbar ? (
              <Progress
                className="progressbarinuploads"
                percent={allProgress[2].progressbar}
                format={(percent) => `${percent + "%"}`}
              />
            ) : null}
          </div>
          <div></div>
        </Stack>
      </div>
    </div>
  );
};

export default Uploads;
