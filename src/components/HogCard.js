import React, { Component } from 'react'

export default class HogCard extends Component {

  state = {
    view: false
  }

  showDetails = () => {
    
    this.setState({
      view: !this.state.view
    })
  }
  
  render(){
    return(

      <div className="ui card" onClick={this.showDetails}>
        <div className="image">
          <img src={"/hog-imgs/" + this.props.name.toLowerCase().split(' ').join('_') + '.jpg'}/> 
        </div>
        <div className="content">
          <a className="header">
            {this.props.name}
          </a>

          {this.state.view ? 
          <div className="meta">
              <p>{this.props.specialty}</p>
              <p>{this.props.greased}</p>
              <p>{this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
              <p>{this.props['highest medal achieved']}</p>
          </div>
          :null}
        </div>
        <button onClick={() => this.props.hide(this.props.name)}>Hide</button>
      </div>
    )
  }
}
