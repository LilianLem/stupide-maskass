import React from 'react';
import ColPlayer from '../ColPlayer/ColPlayer'
import './AppRightColBottom.css'

export default class AppRightColBottom extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
            <div className="AppRightColBottom">
                {(this.props.settings.playersNb > 3) && <ColPlayer player={this.props.settings.playerAreas[2]} character={this.props.settings[`player${this.props.settings.playerAreas[2]}_character`]} lastPlayedCard={this.props.settings[`player${this.props.settings.playerAreas[2]}_lastPlayedCard`]} currentPlayer={this.props.settings.currentPlayer} />}
                {(this.props.settings.playersNb > 4) && <ColPlayer player={this.props.settings.playerAreas[3]} character={this.props.settings[`player${this.props.settings.playerAreas[3]}_character`]} lastPlayedCard={this.props.settings[`player${this.props.settings.playerAreas[3]}_lastPlayedCard`]} currentPlayer={this.props.settings.currentPlayer} />}
            </div>
		)
	}
}