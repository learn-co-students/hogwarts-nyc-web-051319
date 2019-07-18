import React from 'react'
import Hog from './Hog.js'

class HogContainer extends React.Component{




  render(){
    let hogs = this.props.hogs
    console.log(hogs)


    return(
      <div>
      {hogs.map(hog => {
        return <Hog hog={hog} />
      })}
      </div>
    )
  }

}
export default HogContainer
