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
var results_path = "data/text/";

const Index = () => {
  const [paths, setPaths] = useState(null);
  const [choice, setChoice] = useState(0);
  const [data, setData] = useState(null);
  const api = auth.getCurrentUser().get("Projects");

  const pickChoice = (choice) => {
    setChoice(--choice);
  };

  const setPickedData = () => {
    console.log(api[choice].Topic);
    var path = results_path + api[choice].Topic + "/json_metadata.json";
    console.log(path);
    fetch(path)
      .then((res) => res.json())
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
  var path = results_path + api[choice].Topic + "/";
  var results = results_path + "results.json";

  return (
    <Container className="main">
      <MainNavbar />
      <Navigation data={keys} />
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
