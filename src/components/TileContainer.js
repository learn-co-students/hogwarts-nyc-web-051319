import React, { Component } from 'react';
import FrontTile from './FrontTile';
import BackTile from './BackTile';
const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const medal = 'highest medal achieved'

class TileContainer extends Component {

    state = {
        showCard: true
    }

    changeShowCard = () => {
        this.setState({
            showCard: !this.state.showCard
        })
    }

    myPicName = () => {
        return this.props.hog.name.toLowerCase().split(" ").join("_")
    }

    render() {
        return (
                this.state.showCard ?  
                <div onClick={this.changeShowCard}>
                <FrontTile name={this.props.hog.name} myPicName={this.myPicName()}/>
                </div>
                :
                <div onClick={this.changeShowCard}>
                <BackTile specialty={this.props.hog.specialty} greased={this.props.hog.greased ? "HELL YEAA" : "No"} weight={this.props.hog[weight]} medal={this.props.hog[medal]}/>
                </div>
        );
    }
}

export default TileContainer;
