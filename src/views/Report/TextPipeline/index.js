import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FeedbackLoop from "./FeedbackLoop";
import DataPaths from "./DataPaths";
import ModelingPipeline from "./ModelingPipeline";
import GlobalExplainability from "./GlobalExplainability";
import LocalExplainability from "./LocalExplainability";
import BiasTechniques from "./BiasTechniques";
import PerformanceTesting from "./PerformanceTesting";
import WhiteboxTesting from "./WhiteboxTesting";
import Augmentation from "./Augmentation";
import TextAttacks from "./TextAttacks";
import Counterfactuals from "./Counterfactuals";
import ScrollToTop from "react-scroll-to-top";

import {
  Header,
  Footer,
  DatasetSelector,
  Loader,
  Navigation,
  MainNavbar,
} from "components";
import { auth } from "services";

const Index = () => {
  const [paths, setPaths] = useState(null);
  const [choice, setChoice] = useState(0);
  const [data, setData] = useState(null);
  const api = auth.getCurrentUser().get("Projects");
  const userTopicId =
    auth.getCurrentUser().get("topic") + auth.getCurrentUser().id;
  console.log(userTopicId);
  var results_path = `https://saasproduct.s3.ap-south-1.amazonaws.com/${"Imuser"}/Results/`;

  var results = api.map((value) => {
    return (
      <>
        {value.results ? (
          <p style={{ border: "1px solid black" }}>{value.results}</p>
        ) : null}
      </>
    );
  });

  const pickChoice = (choice) => {
    console.log(choice);
    setChoice(--choice);
  };

  const setPickedData = () => {
    var path = results_path + api[choice].results + "/json_metadata.json";

    console.log(path);
    fetch(path)
      .then((res) => {
        if (res.status !== 200) {
          console.log("hello");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setChoice(choice);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setPickedData();
  }, [choice]);

  if (data == null) return <Loader />;
  var keys = Object.keys(data);
  var path = results_path + api[choice].results + "/";

  // var results = api.map((value) => {
  //   return value.Topic;
  // });
  // console.log(results);
  return (
    <Container fluid className="impnavbar">
      <MainNavbar />
      <Navigation data={keys} />
      <h1>Hello</h1>
      <DatasetSelector choice={pickChoice} results={results} />
      {keys.includes("Data Diagnostic") ? (
        <DataPaths
          title="Data Diagnostic"
          data={data["Data Diagnostic"]}
          path={path}
        />
      ) : null}
      {keys.includes("Modeling") ? (
        <ModelingPipeline
          title="Modeling"
          data={data["Modeling"]}
          path={path}
        />
      ) : null}
      {keys.includes("Local Explainability") ? (
        <LocalExplainability
          title="Local Explainability"
          data={data["Local Explainability"]}
          path={path}
        />
      ) : null}
      {keys.includes("Bias Techniques") ? (
        <BiasTechniques
          title="Bias Techniques"
          data={data["Bias Techniques"]}
          path={path}
        />
      ) : null}
      {keys.includes("White Box Testing") ? (
        <WhiteboxTesting
          title="White Box Testing"
          data={data["White Box Testing"]}
          path={path}
        />
      ) : null}
      {keys.includes("Global Explainability") ? (
        <GlobalExplainability
          title="Global Explainability"
          data={data["Global Explainability"]}
          path={path}
        />
      ) : null}
      {keys.includes("Performance Testing") ? (
        <PerformanceTesting
          title="Performance Testing"
          data={data["Performance Testing"]}
          path={path}
        />
      ) : null}
      {keys.includes("TextAttacks") ? (
        <TextAttacks
          title="TextAttacks"
          data={data["TextAttacks"]}
          path={path}
        />
      ) : null}
      {keys.includes("Augmentation") ? (
        <Augmentation
          title="Augmentation"
          data={data["Augmentation"]}
          path={path}
        />
      ) : null}
      {keys.includes("Counterfactuals") ? (
        <Counterfactuals
          title="Counterfactuals"
          data={data["Counterfactuals"]}
          path={path}
        />
      ) : null}
      {keys.includes("Feedback Loop") ? (
        <FeedbackLoop
          title="Feedback Loop"
          data={data["Feedback Loop"]}
          path={path}
        />
      ) : null}
      <Footer />
      <ScrollToTop smooth color="#A03C64" style={{ marginBottom: 50 }} />
    </Container>
  );
};

export default Index;
