import React from 'react';
import ColMenu from './ColMenu'
import './AppRightColTop.css'

export default class AppRightColTop extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="AppRightColTop">
                <ColMenu/>
            </div>
		)
	}
}