import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import MainContainer from './MainContainer'
import hogs from '../porkers_data'

class App extends Component {

  state = {
    hogs: hogs,
    showGreased: false,
    sortedByName: false,
    sortedByWeight: false,
    greasedText: "Show Only Greased Pigs"
  }

  filterGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased,
    })
    if (this.state.greasedText === "Show Only Greased Pigs") {
      this.setState({
        greasedText: "Show All Pigs"
      })
    } else if (this.state.greasedText === "Show All Pigs") {
      this.setState({
        greasedText: "Show Only Greased Pigs"
      })
    }
  }

  sortAllByName = () => {
    this.setState({
      sortedByName: !this.state.sortedByName
    })
  }

  sortAllByName = () => {
    this.setState({
      sortedByWeight: !this.state.sortedByWeight
    })
  }

  render() {
    return (
      <div className="App">
        < Nav filterGreased={this.filterGreased} greasedText={this.state.greasedText} sortedAllByName={this.sortAllByName}
        sortAllByWeight={this.sortAllByWeight}/>

        < MainContainer hogs={this.state.hogs}
        showGreased={this.state.showGreased}
        sortedByName={this.state.sortedByName}
        sortedByWeight={this.state.sortedByWeight}/>
      </div>
    )
  }
}

export default App;
