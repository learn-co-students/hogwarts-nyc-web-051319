import React from "react";
import HogCard from "./HogCard";

export default class HogContainer extends React.Component {
  state = {
    hideHogs: []
  };

  hideCard = (name) => {
    this.setState({
      hideHogs: [...this.state.hideHogs, name]
    }, () => console.log(this.state.hideHogs))
  };

  renderHogs = () => {
    let hogs = this.props.toggledGrease
      ? this.props.hogs.filter(hog => hog.greased)
      : this.props.hogs;

    let newHogs = this.state.hideHogs.forEach(hideHog => {
      return hogs.filter(hog => hog.name !== hideHog)
    })

    hogs = this.state.hideHogs.length !== 0 ? newHogs : hogs

    console.log(hogs)

    switch (this.props.sortMode) {
      case "none":
        return hogs.map(hog => {
          return (
            <HogCard
              hog={hog}
              hideCard={this.hideCard}
              hideHog={this.state.hideHogs}
            />
          );
        });
      case "name":
        return [...hogs]
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map(hog => {
            return (
              <HogCard
                hog={hog}
                hideCard={this.hideCard}
                hideHog={this.state.hideHog}
              />
            );
          });
      case "weight":
        return [...hogs]
          .sort((a, b) => {
            return a.weightRatio - b.weightRatio;
          })
          .reverse()
          .map(hog => {
            return (
              <HogCard
                hog={hog}
                hideCard={this.hideCard}
                hideHog={this.state.hideHog}
              />
            );
          });
        default:
    }
  };

  render() {
    return <div className="ui link cards">{this.renderHogs()}</div>;
  }
}
