import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import {
  Header,
  Footer,
  DatasetSelector,
  Loader,
  Navigation
} from 'components';
var results_path = "data/timeseries/";

const Index = () => {
  const [paths, setPaths] = useState(null);
  const [choice, setChoice] = useState(0);
  const [data, setData] = useState(null);

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
      <h1>Hey </h1>
      <h1>{choice}</h1>
      <h1>{paths}</h1>
    </Container>
  )
}

export default Index;
