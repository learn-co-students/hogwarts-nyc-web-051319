import React, { Component } from 'react';

class FrontTile extends Component {
    render() {
        return (
                <div className="pigTile" >
                    <h4>{this.props.name}</h4>
                    <img src={"/hog-imgs/"+this.props.myPicName+".jpg"} alt={this.props.myPicName}/>
                    
                </div>
        );
    }
}

export default FrontTile;
