import React from "react";
import { Button } from "react-bootstrap";
import Parse from "../../services/ParseService";
import DropFileInput from "./DropFileInput";
import { Currentuser } from "../../services/authServices";

import "./Uploader.css";
import "../../App.css";
const Uploads = () => {
  const logout = () => {
    Parse.User.logOut();
    window.location = "/login";
  };
  const onFileChange = (files) => {
    var parseFile = new Parse.File(files[0].name, files[0]);
    parseFile.save().then(
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
        <Button style={{position:"absolute", right:80}} onClick={logout}>Logout</Button>
        <h1>{`Welcome ${Currentuser.get("fullname")}`}</h1>
        <hr />
      <div className="primary">
        <div className="box">
          <h2 className="header">React drop files input</h2>
          <DropFileInput onFileChange={(files) => onFileChange(files)} />
        </div>
      </div>
    </div>
  );
};

export default Uploads;
