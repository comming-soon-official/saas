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
              newState[0].completed = true;

              return newState;
            } else if (dbname === "modal") {
              newState[1].progressbar = roundvalue;
              newState[1].completed = true;

              return newState;
            } else if (dbname === "embedded") {
              newState[2].progressbar = roundvalue;
              newState[2].completed = true;

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
  };

  return (
    <div>
      <div className="draggerbox">
        <>
          {allProgress[0].showdataset ? (
            <div className="uploads">
              <Upload.Dragger
                accept=".csv"
                multiple={true}
                name="file"
                className="uploadbox"
                showUploadList={true}
                maxCount={1}
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
                  {allProgress[0].completed
                    ? "(Click to Reupload Dataset)"
                    : "Upload your Dataset"}
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
          <div className="uploads">
            <Upload.Dragger
              // accept=".h5, .pkl"
              accept=".h5,.pkl"
              multiple={true}
              name="file"
              className="uploadbox"
              showUploadList={true}
              maxCount={1}
              beforeUpload={(file) => onFileChangeDataset(file, "modal")}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/ai-66-433729.png"
                alt="csv"
                width={100}
                height={100}
              />
              {/* <p className="ant-upload-text">Click or drag file to Upload</p> */}

              <p>
                {" "}
                {allProgress[1].completed
                  ? "(Click to Reupload Modal)"
                  : " Upload Your Modal"}
              </p>
            </Upload.Dragger>
            {allProgress[1].progressbar ? (
              <Progress
                className="progressbarinuploads"
                percent={allProgress[1].progressbar}
                format={(percent) => `${percent + "%"}`}
              />
            ) : null}
          </div>
          <div className="uploads">
            <Upload.Dragger
              multiple={true}
              name="file"
              className="uploadbox"
              showUploadList={true}
              maxCount={1}
              beforeUpload={(file) => onFileChangeDataset(file, "embedded")}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/embedded-2082810-1750241.png"
                alt="embedded"
                width={100}
                height={100}
              />
              {/* <p className="ant-upload-text">Click or drag file to Upload</p> */}

              <p>
                {" "}
                {allProgress[2].completed
                  ? "(Click to Reupload Embedded file)"
                  : "Upload Embedded Support file (Optional)"}
              </p>
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
        </>
      </div>
    </div>
  );
};

export default Uploads;
