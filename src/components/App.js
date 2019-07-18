import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tile from './Tile'
// import imgs from '../hog-imgs/augustus_gloop.jpg'

class App extends Component {
  state = {
    greased: false,
    hogs: hogs
  }

  handleGreaseFilter = () => {
    if (this.state.greased){
      this.setState({
        greased: false,
        hogs: hogs
      })
    } else {
      this.setState({
        greased: true,
        hogs: hogs.filter(hog => hog.greased)
      })
    }
  }

  handleNameSort = () => {
    this.setState({
      hogs: hogs.sort(function(a,b){
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB){
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0
      })
    })
  }

  handleWeightSort = () => {
    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    this.setState({
      hogs: hogs.sort(function(a,b){
        if (a[weight] < b[weight]) {
          return -1
        }
        if (a[weight] > b[weight]){
          return 1
        }
        return 0
      })
    })
  }

  renderTiles = () => {
    return this.state.hogs.map(hog => {
      return <Tile
      name={hog.name}
      imgName={hog.name.toLowerCase().replace(/ /g, "_")}
      specialty={hog.specialty} greased={hog.greased}
      weight={hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
      medal={hog["highest medal achieved"]}/>
    })
  }



  render() {
    // console.log(imgs)
    return (
      <div className="App ui grid container">
          < Nav greased={this.state.greased} handleNameSort={this.handleNameSort} handleGreaseFilter={this.handleGreaseFilter} handleWeightSort={this.handleWeightSort}/>
          {this.renderTiles()}
      </div>
    )
  }
}

export default App;
