import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogList from './HogList.js'

class App extends Component {

  state = {
    displayedHogs: hogs
  }

  greasedHogs = () => {
    let greasyHogs = this.state.displayedHogs.filter(hog => hog.greased)
    this.setState({
      displayedHogs: greasyHogs
    })
  }

  sortHogs = () => {
    let sortedHogs = this.state.displayedHogs.sort(((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
    this.setState({
      displayedHogs: sortedHogs
    })
  }

  sortWeights = () => {
    let sortedWeights = this.state.displayedHogs.sort((a,b)=> {
      return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
    // console.log(sortedHogs)
    this.setState({
      displayedHogs: sortedWeights
    })
  }

  hideHogs = (name) => {
    let hiddenHogs = this.state.displayedHogs.filter(hog => {
      if (name !== hog.name){
        return hog
      }
    })
    this.setState({
      displayedHogs: hiddenHogs
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <button onClick={this.greasedHogs}>Greased</button>
          <button onClick={this.sortHogs}>Sort</button>
          <button onClick={this.sortWeights}>Sort Weight</button>
          <HogList  hogs={this.state.displayedHogs} hide={this.hideHogs}/ >
      </div>
    )
  }
}

export default App;
