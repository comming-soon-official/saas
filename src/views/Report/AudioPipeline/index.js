import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DataPaths from "./DataPaths";
import ModelPaths from "./ModelPaths";
import LocalExplainability from "./LocalExplainability";
import GlobalExplainability from "./GlobalExplainability";
import ScrollToTop from "react-scroll-to-top";
import {
  MainNavbar,
  Footer,
  DatasetSelector,
  Loader,
  Navigation,
} from "components";
var results_path = "data/audio/";

const Index = () => {
  const [paths, setPaths] = useState(null);
  const [choice, setChoice] = useState(0);
  const [data, setData] = useState(null);

  const pickChoice = (choice) => {
    setPickedData(--choice);
  };

  const setPickedData = (choice) => {
    var path = results_path + paths[choice] + "/json_metadata.json";
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setChoice(choice);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(results_path + "results.json")
      .then((res) => res.json())
      .then((result) => {
        setPaths(result.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [choice]);

  useEffect(() => {
    if (paths != null) {
      setPickedData(0);
    }
  }, [paths]);

  if (data == null) return <Loader />;
  var keys = Object.keys(data);
  var path = results_path + paths[choice] + "/";
  var results = results_path + "results.json";

  return (
    <Container className="main">
      <MainNavbar title="Audio Pipeline" />
      <Navigation data={keys} />
      <DatasetSelector choice={pickChoice} results={results} />
      {keys.includes("Data Diagnostic") ? (
        <DataPaths
          title="Data Diagnostic"
          data={data["Data Diagnostic"]}
          path={path}
        />
      ) : null}
      {keys.includes("Modelling") ? (
        <ModelPaths title="Modelling" data={data["Modelling"]} path={path} />
      ) : null}
      {keys.includes("Local Explainability") ? (
        <LocalExplainability
          title="Local Explainability"
          data={data["Local Explainability"]}
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
      <Footer />
      <ScrollToTop smooth color="#A03C64" style={{ marginBottom: 100 }} />
    </Container>
  );
};

export default Index;
