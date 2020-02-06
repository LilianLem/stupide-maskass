import React from 'react';
import './StartScreen.css'

export default class StartScreen extends React.Component {
	constructor(){
		super();
	}

	render(){
		return this.props.showStartScreen ? (
	        <div className="StartScreen">
	            <img src={require('../resources/logo.png')}/>
	            <div className="ButtonLayout">
	            	<button onClick={() => this.props.startGame()}>Commencer la partie</button>
	            </div>
	        </div>
		) : null
	}
}