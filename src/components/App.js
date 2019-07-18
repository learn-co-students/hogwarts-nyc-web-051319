import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer.js'


class App extends Component {

  state = {
    hogs: hogs,
    greased: false,
    nameSort: false,
    weightSort: false
  }

  handleClick = ()=> {
    debugger
    this.setState({
      greased: !this.state.greased
    })
    this.filterGreased()
  }

  filterGreased = () => {

    if (this.state.greased){
      let greasedHogs = hogs.filter((hog)=> {
        return hog.greased === true
      })
      this.state.hogs = greasedHogs
    } else {
      this.state.hogs = hogs
    }
  }

  clickSort = () => {
    console.log('clicked')
    this.setState({
      nameSort: !this.state.nameSort
    })
    this.sortName()
  }

  sortName = () => {
    if(this.state.nameSort){
      let sortedNames = this.state.hogs.sort(function(a, b){
      	let nameA = a.name.toUpperCase()
      	let nameB = b.name.toUpperCase()
      	if(nameA < nameB){
      		return -1
      	}
      	if(nameA > nameB){
      	   return 1
        }
    	   return 0
      })
      this.state.hogs = sortedNames
    } else {
        let sortedNames = this.state.hogs.sort(function(a, b){
        	let nameA = a.name.toUpperCase()
        	let nameB = b.name.toUpperCase()
        	if(nameA < nameB){
        		return 1
        	}
        	if(nameA > nameB){
        	   return -1
          }
      	   return 0
      })
      this.state.hogs = sortedNames
    }
  }
  weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

  // clickWeight = () => {
  //   this.setState({
  //     weightSort = !this.state.weightSort
  //   })
  //   sortWeight()
  // }

  // sortWeight = () => {
  //   if(this.state.weightSort){
  //
  //   }
  // }
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

  render() {

    return (
      <div className="App">
          < Nav weightSort={this.clickWeight}clickSort={this.clickSort} handleClick={this.handleClick} />
          < HogContainer hogs={this.state.hogs} />

      </div>
    )
  }
}

export default App;
