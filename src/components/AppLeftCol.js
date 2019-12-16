import React from 'react';
import AppLeftColTop from './AppLeftColTop'
import AppLeftColBottom from './AppLeftColBottom'
import './AppLeftCol.css'

export default class AppLeftCol extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
	        <div className="AppLeftCol">
	            <AppLeftColTop/>
	            <AppLeftColBottom/>
	        </div>
		)
	}
}