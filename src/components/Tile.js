import React from 'react'
// import cherub from 'cherub.png'

export default class Tile extends React.Component {
  imgSrc = () => {
    return "./hog-imgs/" + this.props.imgName + ".jpg"
  }

  state = {
    clicked: false,
    hidden: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleHide = () => {
    this.setState({
      hidden: true
    })
  }

  handleUnhide = () => {
    this.setState({
      hidden: false
    })
  }

  displayInfo = () => {
    return(
      <div>
        <p>Specialty: {this.props.specialty}</p>
        <p>Greased: {this.props.greased}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Medal: {this.props.medal}</p>
      </div>
    )
  }

  renderHogCard = () => {
    return (
      <div onClick={this.handleClick} className="pigTile">
        <h3>{this.props.name}</h3>
        <img src={this.imgSrc()} />
        {
          this.state.clicked ?
          this.displayInfo() :
          null
        }
        <button onBlur={this.handleUnhide} onFocus={this.handleHide}>Hide Hog</button>
      </div>
    )
  }

  render(){
    console.log(this.props)
    return(
      <div className="ui eight wide column">
      {this.state.hidden ? null : this.renderHogCard()}
      </div>
    )
  }
}
