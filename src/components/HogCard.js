import React from "react";

export default class HogCard extends React.Component {
  state = {
    showDetails: false
  };

  handleClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  renderDetails = () => {
    return (
      <div className="description">
        <span>
          Specialty: <strong>{this.props.hog.specialty}</strong>
        </span>
        <br />
        <span>
          Highest Medal Achieved: <strong>{this.props.hog.medal.toUpperCase()}</strong>
        </span>
        <br/>
        <span>
          Weight to Fridge Ratio: <strong>{this.props.hog.weightRatio}</strong>
        </span>
        <br/>
        <button
          className="ui red button"
          onClick={() => this.props.hideCard(this.props.hog.name)}
        >
          Hide
        </button>
      </div>
    );
  };

  render() {
    const imgName =
      this.props.hog.name
        .toLowerCase()
        .split(" ")
        .join("_") + ".jpg";

    this.props.hog["weightRatio"] = this.props.hog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];

    this.props.hog["medal"] = this.props.hog["highest medal achieved"];

    const { name, specialty, greased, weightRatio, medal } = this.props.hog;

    return (
      <div>
        <div className="ui card">
          <div className="image" onClick={this.handleClick}>
            <img src={`./hog-imgs/${imgName}`} alt="" />
          </div>
          <div className="content">
            <a className="header">{name}</a>
            {this.state.showDetails ? this.renderDetails() : null}
          </div>
        </div>
      </div>
    );
  }
}
