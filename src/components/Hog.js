import React from 'react'

class Hog extends React.Component{

  state = {
    clicked: false
  }

  handleClick = () => {
    console.log('clicked')
    this.setState({
      clicked: !this.state.clicked
    }, () => {console.log(this.state.clicked)})
  }
  renderDetails = () => {
    let hogName = this.props.hog.name.split(' ').join('_').toLowerCase()
    let weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    return(
      <div className="pigTile">
        <h2>{this.props.hog.name}</h2>
        <img src={`hog-imgs/${hogName}.jpg`}/>
        <p>{this.props.hog.specialty}</p>
        <p>{this.props.hog.greased ? "I'm greasey" : "I'm clean as a pickle"}</p>
        <p>{weight} tons</p>
        <p>{this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }

  renderDefault = () => {
    let hogName = this.props.hog.name.split(' ').join('_').toLowerCase()
    return (
      <div className="pigTile">
        <h2>{this.props.hog.name}</h2>
        <img src={`hog-imgs/${hogName}.jpg`}/>
      </div>
    )
  }


  render(){


    console.log(this.props.hog)
    return(
      <div onClick={this.handleClick}>
        {this.state.clicked ? this.renderDetails() : this.renderDefault()}
      </div>
    )
  }

}

export default Hog
