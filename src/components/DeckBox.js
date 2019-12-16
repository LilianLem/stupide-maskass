import React from 'react';
import DeckPart from './DeckPart'
import './DeckBox.css'

export default class DeckBox extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="DeckBox">
                <DeckPart/>
                <DeckPart/>
                <DeckPart/>
            </div>
		)
	}
}