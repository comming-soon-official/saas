import { React, useState } from "react";
import Parse from "../services/parseService";
import { getCurrentUser } from "services/auth.service";
const useFileupload = (file) => {
  const [progressbar, setProgressbar] = useState(0);

  let roundvalue = 0;
  let parseFile = new Parse.File(file.name, file);
  return parseFile
    .save({
      progress: (value) => {
        roundvalue = Math.round(value * 100);
        setProgressbar(roundvalue);
      },
    })
    .then((res) => {
      console.log(res);
      console.log(res._url);

      getCurrentUser().set("dataset", res._url);
      getCurrentUser().save();
      var newStore = new Parse.Object("File");
      newStore.set("File", parseFile);
      newStore.save();
      console.log(res);
      return roundvalue;
    })
    .catch((error) => {
      console.log(error);
    });

  // useEffect(()=>{

  // },[progress])

  return [progressbar, setProgressbar];
};

export default useFileupload;
