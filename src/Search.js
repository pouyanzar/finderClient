import React from "react";

class Search extends React.Component {
  maker = (e) => {
    this.props.category.toLowerCase() === "select a category"
      ? alert("Please select the category first!")
      : this.props.maker(e.target.value);
  };

  modeler = (e) => {
    this.props.modeler(e.target.value);
  };

  catMaker = (e) => {
    this.props.catMaker(e.target.value);
  };

  yearBuilder = (e) => {
    this.props.yearBuilder(e.target.value);
  };

  submitHandler = (e) => {
    this.props.submitHandler(e);
  };

  oemMaker = (e) => {
    this.props.oemMaker(e.target.value);
  };

  oemSubmitHandler = (e) => {
    this.props.oemSubmitHandler(e);
  };

  qfppMaker = (e) => {
    this.props.qfppMaker(e.target.value);
  };

  qfppSubmitHandler = (e) => {
    this.props.qfppSubmitHandler(e);
  };

  render() {
    let yearMaker = [];
    for (let i = 1990; i < 2020; i++) {
      yearMaker.push(i);
    }

    return (
      <div>
        <form className="form" onSubmit={this.submitHandler}>
          <label className="form__label">
            Category
            <select
              className="form__field"
              onChange={this.catMaker}
              value={this.props.category}
            >
              <option key="cat" value="Select a Category">
                Select a Category
              </option>
              <option key="cac" value="Charge Air Cooler">
                Charge Air Cooler
              </option>
              <option key="com" value="Compressor">
                Compressor
              </option>
              <option key="con" value="Condenser">
                Condenser
              </option>
              <option key="dry" value="Dryer">
                Dryer
              </option>
              <option key="rad" value="Radiator">
                Radiator
              </option>
              <option key="res" value="Reservoir Tank">
                Reservoir Tank
              </option>
            </select>
          </label>
          <label className="form__label">
            Make
            <select
              className="form__field"
              onChange={this.maker}
              value={this.props.make}
            >
              <option key="1" value="Select a Make">
                Select a Make
              </option>
              <option key="fre" value="Freightliner">
                Freightliner
              </option>
              <option key="int" value="International">
                International
              </option>
              <option key="mac" value="Mack">
                Mack
              </option>
              <option key="wes" value="Western Star">
                Western Star
              </option>
              <option key="ken" value="Kenworth">
                Kenworth
              </option>
              <option key="pet" value="Peterbilt">
                Peterbilt
              </option>
              <option key="ford" value="Ford">
                Ford
              </option>
              <option key="vol" value="Volvo">
                Volvo
              </option>
            </select>
          </label>
          <label className="form__label">
            Model
            <select
              className="form__field"
              onChange={this.modeler}
              value={this.props.model}
            >
              {this.props.models.map((model) => (
                <option key="model" value={model}>
                  {model}
                </option>
              ))}
            </select>
          </label>

          <label className="form__label">
            Year
            <select
              className="form__field"
              onChange={this.yearBuilder}
              value={this.props.year}
            >
              <option key="yea" value="Select a year">
                Select a year
              </option>
              {yearMaker.map((year, i) => (
                <option key={i}>{year}</option>
              ))}
            </select>
          </label>
          <input className="form__button" type="submit" value="SEARCH" />
        </form>
        <form className="form" onSubmit={this.oemSubmitHandler}>
          <label className="form__label">
            OEM
            <input
              className="form__field"
              type="text"
              onChange={this.oemMaker}
            />
          </label>
          <input className="form__button" type="submit" value="SEARCH" />
        </form>
        <form className="form" onSubmit={this.qfppSubmitHandler}>
          <label className="form__label">
            QFPP
            <input
              className="form__field"
              type="text"
              onChange={this.qfppMaker}
            />
          </label>
          <input className="form__button" type="submit" value="SEARCH" />
        </form>
      </div>
    );
  }
}

export default Search;
