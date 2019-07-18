import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'


class App extends Component {
  state = {
    hogs: hogs,
    sortedByWeight: false,
    sortedByName: false,
    filteredByGreasy: false
  }

  filterGreasyHogs = () => {
    let greasyHogs = this.state.hogs.filter(hog => hog.greased)
    if (this.state.filteredByGreasy) {
      this.setState({
        hogs: hogs,
        filteredByGreasy: !this.state.filteredByGreasy
      })
    } else {
      this.setState({
        hogs: greasyHogs,
        filteredByGreasy: !this.state.filteredByGreasy
      })
    }
  }

  sortByName = () => {
    let sortedHogs = this.state.hogs.sort(function(a, b) {
        let nameA = a.name.toLowerCase()
        let nameB = b.name.toLowerCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    )
    this.setState({
      hogs: sortedHogs,
      sortedByName: !this.state.sortedByName
    })
  }

  sortByWeight = () => {
    let sortedHogs = this.state.hogs.sort(function(a, b) {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] -
        b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      }
    )
    this.setState({
      hogs: sortedHogs
    })
  }

  hideHog = (name) => {
    let removeHog = this.state.hogs.filter(hog => {
      if (hog.name !== name) {
        return hog
      }
    })
    this.setState({
      hogs: removeHog
    })
  }

  render() {
    return (
      <div className="App">
          < Nav sortByName={this.sortByName} sortByWeight={this.sortByWeight} filterGreasyHogs={this.filterGreasyHogs} />

          <HogList hogs={this.state.hogs} hideHog={this.hideHog} />
      </div>
    )
  }
}

export default App;
