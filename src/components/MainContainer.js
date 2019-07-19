import React from 'react'
import HogCard from './HogCard'

class MainContainer extends React.Component {

  render() {
    let greasedHogs = this.props.hogs.filter(hog => hog.greased === true)
    let sortedHogsByName = this.props.hogs.sort((a, b) =>
    (a.name.toLowerCase() > b.name.toLowerCase()) ? 1: -1)
    let sortedHogsByWeight = this.props.hogs.sort((a, b) =>
    (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1: -1)
    return (

      <div className='ui grid container'>

        {this.props.showGreased ?
            greasedHogs.map(hog =>
            < HogCard hogName={hog.name}
            hogSpecialty={hog.specialty}
            hogGreased={hog.greased}
            hogWeight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            hogMedal={hog['highest medal achieved']}
            hogImage={'/hog-imgs' + '/' + hog.name.toLowerCase().split(' ').join('_') + '.jpg'}
            />)
          :
            this.props.hogs.map(hog =>
            < HogCard hogName={hog.name}
            hogSpecialty={hog.specialty}
            hogGreased={hog.greased}
            hogWeight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            hogMedal={hog['highest medal achieved']}
            hogImage={'/hog-imgs' + '/' + hog.name.toLowerCase().split(' ').join('_') + '.jpg'}
            />)
          }


          {this.props.sortedByName ?
              sortedHogsByName.map(hog =>
              < HogCard hogName={hog.name}
              hogSpecialty={hog.specialty}
              hogGreased={hog.greased}
              hogWeight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
              hogMedal={hog['highest medal achieved']}
              hogImage={'/hog-imgs' + '/' + hog.name.toLowerCase().split(' ').join('_') + '.jpg'}
              />)
            :
              this.props.hogs.map(hog =>
              < HogCard hogName={hog.name}
              hogSpecialty={hog.specialty}
              hogGreased={hog.greased}
              hogWeight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
              hogMedal={hog['highest medal achieved']}
              hogImage={'/hog-imgs' + '/' + hog.name.toLowerCase().split(' ').join('_') + '.jpg'}
              />)
            }



            {this.props.sortedByWeight ?
                sortedHogsByWeight.map(hog =>
                < HogCard hogName={hog.name}
                hogSpecialty={hog.specialty}
                hogGreased={hog.greased}
                hogWeight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                hogMedal={hog['highest medal achieved']}
                hogImage={'/hog-imgs' + '/' + hog.name.toLowerCase().split(' ').join('_') + '.jpg'}
                />)
              :
                this.props.hogs.map(hog =>
                < HogCard hogName={hog.name}
                hogSpecialty={hog.specialty}
                hogGreased={hog.greased}
                hogWeight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                hogMedal={hog['highest medal achieved']}
                hogImage={'/hog-imgs' + '/' + hog.name.toLowerCase().split(' ').join('_') + '.jpg'}
                />)
              }
      </div>
    )
  }
}

export default MainContainer
