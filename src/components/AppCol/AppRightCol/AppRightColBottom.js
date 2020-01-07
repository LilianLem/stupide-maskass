import React from 'react';
import ColPlayer from '../ColPlayer/ColPlayer'
import './AppRightColBottom.css'

export default class AppRightColBottom extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="AppRightColBottom">
                <ColPlayer player={'C'} />
                <ColPlayer player={'D'} />
            </div>
		)
	}
}