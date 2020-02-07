import React from 'react';
import DeckBox from './DeckBox'
import './AppDeck.css'

export default class AppDeck extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let deckClasses = 'AppDeck';
		this.props.settings.displayDraw2 && (deckClasses += ' tie');

		return (
	        <section className={deckClasses}>
	            <h1>Pioche</h1>
	            <DeckBox settings={this.props.settings}/>
	        </section>
		)
	}
}