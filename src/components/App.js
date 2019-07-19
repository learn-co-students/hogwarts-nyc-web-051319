import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import MainContainer from './MainContainer';
const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {

  state = {
    hogs: [...hogs],
    greaseFilter: true
  }

  triggerGreaseFilter = () => {
    this.setState({
      hogs: this.filterHogs(),
      greaseFilter: !this.state.greaseFilter
    })
  }

  filterHogs = () =>{
    return this.state.greaseFilter ? hogs.filter(hog => hog.greased) : [...hogs]
  }

  sortByName = () => {
    this.setState({
      hogs: this.state.hogs.sort(function(a,b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    })
    })
  }

  sortByWeight = () => {
    this.setState({
      hogs: this.state.hogs.sort(function(a,b) {
        return a[weight] - b[weight]
    })
    }) 
  }



  render() {
    return (
      <div className="App">
          < Nav triggerGreaseFilter={this.triggerGreaseFilter} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
          <MainContainer hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
