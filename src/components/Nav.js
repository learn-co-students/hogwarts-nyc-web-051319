import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<div className="ui toggle checkbox" onClick={props.filterGreasyHogs} >
				<label>Filter Greasy Hogs</label>
				<input type="checkbox" tabindex="0" class="hidden" />
				</div>
				<button className="ui button" onClick={props.sortByName}> Sort Hogs by Name</button>
				<button className="ui button" onClick={props.sortByWeight}> Sort Hogs by Weight</button>
			</div>
		</div>
	)
}

export default Nav
