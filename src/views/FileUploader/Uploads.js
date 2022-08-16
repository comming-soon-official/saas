import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Progress } from "antd";
import Parse from "../../services/parseService";
import DropFileInput from "./DropFileInput";
import { auth } from "../../services";
import ComponentModal from "../../components/Modal";
import MainNavbar from "../../components/Navbar";
import "./Uploader.css";
import "../../App.scss";

var CurrentUser = auth.getCurrentUser();

const Uploads = () => {
  const [progress, setProgress] = useState(0);
  const logout = () => {
    Parse.User.logOut();
    window.location = "/login";
  };

  const onFileChange = (files) => {
    var parseFile = new Parse.File(files[0].name, files[0]);
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
  };
  return (
    <div>
      {/* <Button style={{position:"absolute", right:80}} onClick={logout}>Logout</Button>
        <h1>{`Welcome ${CurrentUser?.get("fullname")}`}</h1> */}
      <MainNavbar logout={logout} />
      <div className="primary">
        <div className="box">
          <h2 className="header">React drop files input</h2>
          <DropFileInput onFileChange={(files) => onFileChange(files)} />
          {progress ? <Progress percent={progress} /> : null}
          <ComponentModal />
        </div>
      </div>
    </div>
  );
};

export default Uploads;
