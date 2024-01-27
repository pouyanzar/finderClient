import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search";
import PartList from "./PartList";
import PartCard from "./PartCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  const [make, setMake] = useState("Select a Make");
  const [models, setModels] = useState(["Select a Model"]);
  const [model, setModel] = useState("Select a Model");
  const [category, setCategory] = useState("Select a category");
  const [year, setYear] = useState("Select a year");
  const [parts, setParts] = useState([]);
  const [OEM, setOEM] = useState("");
  const baseUrl = "https://finder-server.onrender.com";

  const init = (body) => {
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    return init;
  };

  const maker = (make) => {
    setMake(make);
  };

  const modeler = (model) => {
    setModel(model);
  };

  const catMaker = (category) => {
    setCategory(category);
  };

  const yearBuilder = (year) => {
    setYear(year);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      make,
      model,
      category,
      year,
    };

    fetch(`${baseUrl}/part`, init(body))
      .then((res) => res.json())
      .then((parts) => setParts(parts));
  };

  const OEMMaker = (oem) => {
    setOEM(oem);
  };

  const oemSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      OEM: OEM,
    };

    fetch(`${baseUrl}/oem`, init(body))
      .then((res) => res.json())
      .then((parts) => setParts(parts));
  };

  useEffect(() => {
    let body = { make };
    fetch(`${baseUrl}/make`, init(body))
      .then((res) => res.json())
      .then((data) => setModels(data));
  }, [make]);

  return (
    <div className="App">
      <Router>
        <div>
          <Search
            models={models}
            model={model}
            make={make}
            year={year}
            category={category}
            maker={maker}
            modeler={modeler}
            catMaker={catMaker}
            yearBuilder={yearBuilder}
            submitHandler={submitHandler}
            oemSubmitHandler={oemSubmitHandler}
            oemMaker={OEMMaker}
            // qfppMaker={qfppMaker}
            // qfppSubmitHandler={qfppSubmitHandler}
          />

          <PartList result={parts} />

          {/* <Switch>
            <Route
              path="/:qfpp"
              render={(props) => <PartCard id={props.match.url} />}
            />
          </Switch> */}
        </div>
      </Router>
    </div>
  );
};

export default App;
