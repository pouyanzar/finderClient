import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search";
import PartList from "./PartList";
const App = () => {
  const [make, setMake] = useState("Select a Make");
  const [models, setModels] = useState(["Select a Model"]);
  const [model, setModel] = useState("Select a Model");
  const [category, setCategory] = useState("Select a category");
  const [year, setYear] = useState("Select a year");
  const [parts, setParts] = useState([]);
  const [OEM, setOEM] = useState("");
  const baseUrl = "http://localhost:8080";
  // const baseUrl = "https://finder-server.onrender.com";

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
      .then((parts) => {
        console.log(parts);
        setParts(parts);
      });
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
    let body = { make, category };
    fetch(`${baseUrl}/make`, init(body))
      .then((res) => res.json())
      .then((data) => setModels(data));
  }, [make]);

  return (
    <div className="App">
      {/* <Router> */}
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
        />

        <PartList result={parts} />
      </div>
      {/* </Router> */}
    </div>
  );
};

export default App;
