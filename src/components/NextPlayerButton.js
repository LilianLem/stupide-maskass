import React from 'react';
import './NextPlayerButton.css'

export default class NextPlayerButton extends React.Component {
	constructor(){
		super();
	}

	render(){
		let isDisplayed = false;
		let onClickFunction;

		if(this.props.showNextPlayerButton != 'none')
		{
			if(this.props.showNextPlayerButton == 'player')
			{
				onClickFunction = () => this.props.switchPlayer();
			}
			else if(this.props.showNextPlayerButton == 'round')
			{
				onClickFunction = () => this.props.setupRound();
			}

			isDisplayed = true;
		}

		return isDisplayed ? (
	        <div className="NextPlayerButton" onClick={onClickFunction}>
	        	<p>SUIVANT</p>
	        </div>
		) : null
	}
}