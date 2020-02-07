import React from 'react';
import PlayerBox from './PlayerBox'
import './ColPlayer.css'

export default class ColPlayer extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
            <div className="ColPlayer">
                <h2>Joueur {this.props.player}</h2>
                <PlayerBox player={this.props.player} character={this.props.character} lastPlayedCard={this.props.lastPlayedCard} currentPlayer={this.props.currentPlayer}/>
            </div>
		)
	}
}