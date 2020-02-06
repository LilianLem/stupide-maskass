import React from 'react';
import HandCarte from './HandCarte'
import './AppHand.css'

export default class AppHand extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let cardSide = this.props.settings.displayed ? 'front' : 'back';

		let cardStyleLocked = this.props.settings.locked ? 'none' : 'auto';
		let cardStyleInline = {pointerEvents: cardStyleLocked}; // Allow click
		let cardStyleClasses = 'HandCarte' + ' ' + cardSide + ' ' + this.props.settings.character;

		let handCards;
		if(this.props.settings.hand !== undefined)
		{
			handCards = this.props.settings.hand.map((number) => 
				<HandCarte number={number} cardStyleInline={cardStyleInline} cardStyleClasses={cardStyleClasses} />
			);
		}
		else { handCards = null; }

		console.log(this.props.settings);
		console.log(cardStyleInline);
		console.log(cardStyleClasses);

		return (
	        <section className="AppHand">
	        	{handCards}
	        </section>
		)
	}
}