import React from 'react';
import PlayerLast from './PlayerLast'
import PlayerPlayed from './PlayerPlayed'
import './PlayerBox.css'

export default class PlayerBox extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="PlayerBox">
                <PlayerLast/>
                <PlayerPlayed/>
            </div>
		)
	}
}