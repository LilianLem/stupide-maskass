import React from 'react';
import './PlayerLast.css'

export default class PlayerLast extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let cardClasses = 'PlayerLast front ' + this.props.character;

		return (
            <div className={cardClasses}>{this.props.lastPlayedCard}</div>
		)
	}
}