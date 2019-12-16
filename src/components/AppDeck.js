import React from 'react';
import DeckBox from './DeckBox'
import './AppDeck.css'

export default class AppDeck extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
	        <div className="AppDeck">
	            <h1>Pioche</h1>
	            <DeckBox/>
	        </div>
		)
	}
}