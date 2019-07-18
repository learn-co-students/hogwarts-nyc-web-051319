import React, { Component } from 'react'
import HogCard from './HogCard'

export default class HogList extends Component {


  renderHogs = () => {
    return this.props.hogs.map(function(hog, index) {
      return <HogCard {...hog} hideHog={this.props.hideHog} id={index} />
    }.bind(this))
  }

  render() {
    return(
      <div className="ui cards">
        {
          this.renderHogs()
        }
      </div>
    )
  }
}
