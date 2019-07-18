import React, { Component } from 'react';

class BackTile extends Component {
    render() {
        return (
            <div className="pigTile" >
                <p>Specialty: {this.props.specialty}</p>
                <p>Greased: {this.props.greased}</p>
                <p>Weight: {this.props.weight}</p>
                <p className="achievementText">Medal: {this.props.medal}</p>
            </div>
        );
    }
}

export default BackTile;
