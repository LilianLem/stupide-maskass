import React from 'react';
import './StartScreen.css'

export default class StartScreen extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
	        <div className="StartScreen">
	            <img src={require('../resources/logo.png')}/>
	            <div className="ButtonLayout">
	            	<button>Commencer la partie</button>
	            </div>
	        </div>
		)
	}
}