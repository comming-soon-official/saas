import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { Progress, Upload } from "antd";
import Parse from "../../services/parseService";
import { auth } from "../../services";
import "./Uploader.css";
import "../../App.scss";

const Uploads = ({ setAllProgress, allProgress }) => {
  const onFileChangeDataset = async (file, dbname) => {
    let roundvalue = 0;
    const parseFile = new Parse.File(file.name, file);
    try {
      const res = await parseFile.save({
        progress: (value) => {
          roundvalue = Math.round(value * 100);
          setAllProgress((prev) => {
            const newState = [...prev];
            if (dbname === "dataset") {
              newState[0].progressbar = roundvalue;
              newState[0].completed = true;
            } else if (dbname === "modal") {
              newState[1].progressbar = roundvalue;
              newState[1].completed = true;
            } else if (dbname === "embedded") {
              newState[2].progressbar = roundvalue;
              newState[2].completed = true;
            }
            return newState;
          });
        },
      });
      console.log(res._url);
      const currentUser = auth.getCurrentUser();
      currentUser.set(dbname, res._url);
      await currentUser.save();
      const newStore = new Parse.Object("File");
      newStore.set("File", parseFile);
      await newStore.save();
    } catch (error) {
      console.log(error);
    }
  };

  const renderUploadBox = (
    dbname,
    completedText,
    placeholderText,
    iconUrl,
    acceptedTypes
  ) =>
    allProgress[dbname].showdataset && (
      <div>
        <Upload.Dragger
          accept={acceptedTypes}
          multiple={true}
          name="file"
          className="uploadbox"
          showUploadList={true}
          maxCount={1}
          beforeUpload={(file) => onFileChangeDataset(file, dbname)}
        >
          <img src={iconUrl} alt={dbname} width={100} height={100} />
          <p>
            {allProgress[dbname].completed
              ? `(Click to Reupload ${completedText})`
              : placeholderText}
          </p>
        </Upload.Dragger>

        {allProgress[dbname].progressbar && (
          <Progress
            className="progressbarinuploads"
            percent={allProgress[dbname].progressbar}
            format={(percent) => `${percent}%`}
          />
        )}
      </div>
    );

  return (
    <div>
      <div className="draggerbox">
        <Stack gap={3}>
          {renderUploadBox(
            "dataset",
            "Dataset",
            "Upload your Dataset",
            "https://cdn.iconscout.com/icon/free/png-256/csv-1832607-1552247.png",
            ".csv"
          )}
          {renderUploadBox(
            "modal",
            "Modal",
            "Upload Your Modal",
            "https://cdn.iconscout.com/icon/free/png-256/ai-66-433729.png",
            ".h5, .pkl"
          )}
          {renderUploadBox(
            "embedded",
            "Embedded file",
            "Upload Embedded Support file (Optional)",
            "https://cdn.iconscout.com/icon/free/png-256/embedded-2082810-1750241.png",
            ""
          )}
        </Stack>
      </div>
    </div>
  );
};
export default Uploads;
