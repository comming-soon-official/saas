import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import LoadingData from "./LoadingData";
import ModelingPipeline from "./ModelingPipeline";
import ModelExplainability from "./ModelExplainability";
import AttackVectors from "./AttackVectors";
import FeedbackLoop from "./FeedbackLoop";
import DeepXplore from "./DeepXplore";
import MetamorphicTesting from "./MetamorphicTesting";
import ModelPrivacy from "./ModelPrivacy";
import ModelQuantization from "./ModelQuantization";
import PerformanceTesting from "./PerformanceTesting";
import Navigation from "./Navigation";
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from "react-i18next";

//import { ReactComponent as MySVG } from "../../images/uparrow.svg";
import {
  MainNavbar,
  Footer,
  DatasetSelector,
  Loader,
  //,Navigation
} from "components";
import UserContext from "views/Auth/User";
import { auth } from "services";

var results_path = "data/imagepipeline/";

const Index = (props) => {
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
  var user = auth.getCurrentUser();

  return (
    <UserContext.Provider value={user}>
      <Container className="main">
        <MainNavbar title="Image Pipeline" choice={0} />
        <Navigation data={keys} />
        <DatasetSelector choice={pickChoice} results={results} />
        <hr />
        {keys.includes("Data Diagnostic") ? (
          <LoadingData
            title="Data Diagnostic"
            data={data["Data Diagnostic"]}
            path={path}
          />
        ) : null}
        {keys.includes("Modeling Pipeline") ? (
          <ModelingPipeline
            title="Modeling Pipeline"
            data={data["Modeling Pipeline"]}
            path={path}
          />
        ) : null}
        {keys.includes("Model Explainability") ? (
          <ModelExplainability
            title="Model Explainability"
            data={data["Model Explainability"]}
            path={path}
          />
        ) : null}
        {keys.includes("Attack Vectors") ? (
          <AttackVectors
            title="Attack Vectors"
            data={data["Attack Vectors"]}
            path={path}
            choice={choice}
          />
        ) : null}
        {keys.includes("Metamorphic Testing") ? (
          <MetamorphicTesting
            title="Metamorphic Testing"
            data={data["Metamorphic Testing"]}
            path={path}
          />
        ) : null}
        {keys.includes("DeepXplore Corner Cases") ? (
          <DeepXplore
            title="DeepXplore Corner Cases"
            data={data["DeepXplore Corner Cases"]}
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
        {keys.includes("Model Privacy") ? (
          <ModelPrivacy
            title="Model Privacy"
            data={data["Model Privacy"]}
            path={path}
          />
        ) : null}
        {keys.includes("Model Quantization") ? (
          <ModelQuantization
            title="Model Quantization"
            data={data["Model Quantization"]}
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
        <Footer />
        <ScrollToTop smooth style={{ marginBottom: 100 }} />
      </Container>
    </UserContext.Provider>
  );
};

export default Index;
