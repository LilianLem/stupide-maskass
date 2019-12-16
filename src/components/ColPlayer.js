import React from 'react';
import PlayerBox from './PlayerBox'
import './ColPlayer.css'

export default class ColPlayer extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="ColPlayer">
                <h2>Joueur {this.props.player}</h2>
                <PlayerBox/>
            </div>
		)
	}
}