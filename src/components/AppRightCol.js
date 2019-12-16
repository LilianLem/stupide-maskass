import React from 'react';
import AppRightColTop from './AppRightColTop'
import AppRightColBottom from './AppRightColBottom'
import './AppRightCol.css'

export default class AppRightCol extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
	        <div className="AppRightCol">
	            <AppRightColTop/>
	            <AppRightColBottom/>
	        </div>
		)
	}
}