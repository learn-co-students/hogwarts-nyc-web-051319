import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    hogs: hogs,
    greasedHogs: [],
    toggledGrease: false,
    sortMode: "none"
  };

  handleToggle = () => {
    this.setState({
      toggledGrease: !this.state.toggledGrease
    });
  };

  handleChange = e => {
    this.setState({
      sortMode: e.target.value
    });
  };

  handleShowAll = () => {
    this.setState({
      hogs: hogs
    });
  };

  render() {
    return (
      <div className="App">
        <Nav
          handleToggle={this.handleToggle}
          handleChange={this.handleChange}
        />
        <HogContainer
          hogs={this.state.hogs}
          toggledGrease={this.state.toggledGrease}
          sortMode={this.state.sortMode}
        />
      </div>
    );
  }
}

export default App;
