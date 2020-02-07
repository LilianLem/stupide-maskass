import React from 'react';
import ColPlayer from '../ColPlayer/ColPlayer'
import './AppLeftColBottom.css'

export default class AppLeftColBottom extends React.Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
            <div className="AppLeftColBottom">
                <ColPlayer player={this.props.settings.playerAreas[0]} character={this.props.settings[`player${this.props.settings.playerAreas[0]}_character`]} lastPlayedCard={this.props.settings[`player${this.props.settings.playerAreas[0]}_lastPlayedCard`]} currentPlayer={this.props.settings.currentPlayer} />
                {(this.props.settings.playersNb > 2) && <ColPlayer player={this.props.settings.playerAreas[1]} character={this.props.settings[`player${this.props.settings.playerAreas[1]}_character`]} lastPlayedCard={this.props.settings[`player${this.props.settings.playerAreas[1]}_lastPlayedCard`]} currentPlayer={this.props.settings.currentPlayer} />}
            </div>
		)
	}
}