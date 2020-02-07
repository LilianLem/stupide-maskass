import React from 'react';
import PlayerLast from './PlayerLast'
import PlayerPlayed from './PlayerPlayed'
import './PlayerBox.css'

export default class PlayerBox extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
            <div className="PlayerBox">
                {(this.props.lastPlayedCard !== 0) && <PlayerLast character={this.props.character} lastPlayedCard={this.props.lastPlayedCard} />}
                {(this.props.player < this.props.currentPlayer) && <PlayerPlayed character={this.props.character}/>}
            </div>
		)
	}
}