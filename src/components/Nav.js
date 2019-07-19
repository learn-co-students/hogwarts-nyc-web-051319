import piggy from "../porco.png";
import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
            <img src={piggy} className="App-logo" alt="piggy" />
          </a>
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
        <br />
        <div className="ui toggle checkbox">
          <input
            type="checkbox"
            name="public"
            onClick={this.props.handleToggle}
          />
          <label>Greased Hogs</label>
        </div>
        <select
          onChange={e => this.props.handleChange(e)}
          className="ui standard button"
        >
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <button
          className="positive ui button"
          onClick={this.props.handleShowAll}
        >
          Show All
        </button>
      </div>
    );
  }
}

export default Nav;
