import React, { Component } from 'react';

class SortBar extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.sortByName}>Sort By Name</button>
                <button onClick={this.props.sortByWeight}>Sort By Weight</button>
            </div>
        );
    }
}

export default SortBar;
