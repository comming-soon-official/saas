import React, {useEffect, useState} from 'react';
import {  Container } from 'react-bootstrap';
import GlobalVisualization from './GlobalVisualization';
import LocalVisualization from './LocalVisualization';
// import Model_Paths from './Model_Paths';
// import Data_Paths from './Data_Paths';
import EDA from './EDA';
import Bias from './Bias';
// import Gaminet from './Gaminet';
import Synthetic from './Synthetic';
import Metamorphic from './Metamorphic';
import CounterFactual from './CounterFactual';
import PerformanceTesting from './PerformanceTesting';
import Debiasing from "./Debiasing";

import {
  Header,
  Footer,
  DatasetSelector,
  Navigation,
  Loader
} from 'components';
import ScrollToTop from "react-scroll-to-top";
//import { ReactComponent as MySVG } from "../../images/uparrow.svg";

var results_path = "data/regression/";

const Index = () => {
  const [paths, setPaths] = useState(null);
  const [choice, setChoice] = useState(0);
  const [data, setData] = useState(null);

  const pickChoice = (choice) => {
    setPickedData(--choice);
  }

  const setPickedData = (choice) => {
    var path = results_path + paths[choice] + "/json_metadata.json";
    fetch(path)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setChoice(choice);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetch(results_path + "results.json")
    .then((res) => res.json())
    .then((result) => {
      setPaths(result.results);
    }).catch((err) => {
      console.log(err);
    });

  }, [choice]);

  useEffect(() => {
    if(paths != null){
      setPickedData(0);
    }
  }, [paths]);

  if(data == null) return <Loader />;
  var keys = Object.keys(data);
  var path = results_path + paths[choice] + "/";
  var results = results_path + "results.json";

  return (
    <Container className="main">
      <Header title="Structured Data Report" />
      <Navigation data={keys} />
      <DatasetSelector choice={pickChoice} results={results} />
      { keys.includes("Exploratory Data Analysis") ?
        <EDA
          title="Exploratory Data Analysis"
          data={data["Exploratory Data Analysis"]}
          path={path} /> : null }
      { keys.includes("Global Explainability") ?
        <GlobalVisualization
          title="Global Explainability"
          data={data["Global Explainability"]}
          path={path} /> : null }
      { keys.includes("Local Explainability") ?
        <LocalVisualization
          title="Local Explainability"
          data={data["Local Explainability"]}
          path={path} /> : null }
      { keys.includes("Bias Techniques") ?
        <Bias
          title="Bias Techniques"
          data={data["Bias Techniques"]}
          path={path} /> : null }
      { keys.includes("Debiasing") ? (
        <Debiasing title="Debiasing" data={data["Debiasing"]} path={path} />
      ) : null}
      { keys.includes("Synthetic Data") ?
        <Synthetic
          title="Synthetic Data"
          data={data["Synthetic Data"]}
          path={path} /> : null }
      { keys.includes("Metamorphic Testing") ?
        <Metamorphic
          title="Metamorphic Testing"
          data={data["Metamorphic Testing"]}
          path={path} /> : null }
      { keys.includes("Counterfactuals Generated") ?
        <CounterFactual
          title="Counterfactuals Generated"
          data={data["Counterfactuals Generated"]}
          path={path} /> : null }
      { keys.includes("Performance Testing") ?
        <PerformanceTesting
          title="Performance Testing"
          data={data["Performance Testing"]}
          path={path} /> : null }

      <Footer />
      <ScrollToTop smooth color="#A03C64" style={{"marginBottom": 100}} />
    </Container>
  )
}

export default Index;
