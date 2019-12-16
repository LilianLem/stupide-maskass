import React from 'react';
import ColPlayer from './ColPlayer'
import './AppRightColBottom.css'

export default class AppRightColBottom extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="AppRightColBottom">
                <ColPlayer value={'C'} />
                <ColPlayer value={'D'} />
            </div>
		)
	}
}