import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DataPaths from "./DataPaths";
import ModelPaths from "./ModelPaths";
import LocalExplainability from "./LocalExplainability";
import GlobalExplainability from "./GlobalExplainability";
import ScrollToTop from "react-scroll-to-top";
//import { ReactComponent as MySVG } from "../../images/uparrow.svg";
import {
  MainNavbar,
  Footer,
  DatasetSelector,
  Loader,
  Navigation,
} from "components";
var results_path = "data/timeseries/";

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
      <MainNavbar title="Timeseries Pipeline" />
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
      {keys.includes("local_explainabilty") ? (
        <LocalExplainability
          title="Local Explainability"
          data={data["local_explainabilty"]}
          path={path}
        />
      ) : null}
      {keys.includes("global_explainabilty") ? (
        <GlobalExplainability
          title="Global Explainability"
          data={data["global_explainabilty"]}
          path={path}
        />
      ) : null}
      <Footer />
      <ScrollToTop smooth color="#A03C64" style={{ marginBottom: 100 }} />
    </Container>
  );
};

export default Index;
