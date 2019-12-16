import React from 'react';
import ColLogo from './ColLogo'
import ColManches from './ColManches'
import './AppLeftColTop.css'

export default class AppLeftColTop extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="AppLeftColTop">
                <ColLogo/>
                <ColManches/>
            </div>
		)
	}
}