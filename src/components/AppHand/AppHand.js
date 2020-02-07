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
		let showCardValues = this.props.settings.displayed;

		let handCards;
		if(this.props.settings.hand !== undefined)
		{
			handCards = this.props.settings.hand.map((value) => 
				<HandCarte value={value} showCardValues={showCardValues} cardStyleInline={cardStyleInline} cardStyleClasses={cardStyleClasses} cardIsChosen={this.props.cardIsChosen} />
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