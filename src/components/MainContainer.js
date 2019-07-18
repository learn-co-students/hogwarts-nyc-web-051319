import React, { Component } from 'react';
import TileContainer from './TileContainer';

class MainContainer extends Component {
   
    hogTiles = ()=> {
        return this.props.hogs.map(hog => <TileContainer hog={hog} />)
    }
    render() {
        return (
            <div>
                {this.hogTiles()}
            </div>
        );
    }
}

export default MainContainer;
