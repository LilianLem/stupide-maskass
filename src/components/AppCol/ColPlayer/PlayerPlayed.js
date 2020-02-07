import React from 'react';
import './PlayerPlayed.css'

export default class PlayerPlayed extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let cardClasses = 'PlayerPlayed back ' + this.props.character;

		return (
            <div className={cardClasses}> </div>
		)
	}
}