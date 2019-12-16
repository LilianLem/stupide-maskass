import React from 'react';
import HandCarte from './HandCarte'
import './AppHand.css'

export default class AppHand extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
	        <div className="AppHand">
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	            <HandCarte/>
	        </div>
		)
	}
}