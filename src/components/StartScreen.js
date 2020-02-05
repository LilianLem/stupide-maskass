import React from 'react';
import './StartScreen.css'

export default class StartScreen extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
	        <div className="StartScreen">
	            <img src="../resources/logo.png" width="50%"/>
	        </div>
		)
	}
}