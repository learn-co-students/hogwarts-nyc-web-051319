import React, { Component } from 'react'

export default class HogCard extends Component {

  state = {
    view: false,
    haveGif: false
  }

  showDetails = () => {
    this.setState({
      view: !this.state.view
    })
  }

  showPigGifs = (id) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=pigs&api_key=NrYFp8y7jV8ObUhOZreMBpNC3pxu6xb1')
    .then(res => res.json())
    .then(json => {
      if (!this.state.haveGif) {
        this.setState({
          haveGif: json.data[id].images.original.url
        })
      } else {
        this.setState({
          haveGif: false
        })
      }
    })
  }

  render() {
    return(
      <div onClick={this.showDetails} className="card ui">
        <div className="image ui" onClick={() => this.showPigGifs(this.props.id)}>
          <img src={this.state.haveGif ? this.state.haveGif : "/hog-imgs/" + this.props.name.toLowerCase().split(' ').join('_') + '.jpg'} />
        </div>
        <div className="content">
        <a className="header">{this.props.name}</a>
          {this.state.view ?
            <div className="description">
              <p>Specialty: {this.props.specialty}</p>
              <p>{this.props.greased ? "Greasy" : "Not Greasy"}</p>
              <p>Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    }</p>
              <p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
            </div>
            : null
          }
          </div>
        <div class="extra content">
          <button className="ui button" onClick={() => this.props.hideHog(this.props.name)}>Hide Hog</button>
        </div>
      </div>
    )
  }
}
