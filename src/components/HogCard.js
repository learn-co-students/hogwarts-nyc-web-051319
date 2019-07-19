import React from 'react'

class HogCard extends React.Component {

  state = {
    pokedPork: false
  }

  changeClicked = () => {
    this.setState({
      pokedPork: !this.state.pokedPork
    })
  }

  render() {
    return (
      <div className='pigTile' onClick={this.changeClicked}>
        {this.state.pokedPork ?
          <div>
            <h3>{this.props.hogName}</h3>
            <h4>{this.props.hogSpecialty}</h4>
            <h4>{this.props.hogGreased}</h4>
            <h4>{this.props.hogWeight}</h4>
            <h4>{this.props.hogMedal}</h4>
            <img src={this.props.hogImage}/>
          </div>
          :
          <div>
            <h3>{this.props.hogName}</h3>
            <img src={this.props.hogImage}/>
          </div>}
      </div>
    )
  }

}

export default HogCard
