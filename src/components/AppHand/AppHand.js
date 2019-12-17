import React from 'react';
import HandCarte from './HandCarte'
import './AppHand.css'

export default class AppHand extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
	        <section className="AppHand">
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
	        </section>
		)
	}
}