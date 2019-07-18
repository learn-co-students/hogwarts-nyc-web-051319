import React, { Component } from 'react';

class FilterBar extends Component {
    render() {
        return (
            <button onClick={this.props.triggerGreaseFilter}>Grease Filter</button>
        );
    }
}

export default FilterBar;
