import React, { Component } from 'react'
import { hostname } from 'os'
import HogCard from './HogCard.js'


export default class HogList extends Component {
  
  renderHogs = () => {
    return this.props.hogs.map((hog)=>{
      return <HogCard {...hog} hide={this.props.hide}/>
    })
  }

  render(){
    return(
      <div className="ui cards">
        {this.renderHogs()}
      </div>
    )
  }
}