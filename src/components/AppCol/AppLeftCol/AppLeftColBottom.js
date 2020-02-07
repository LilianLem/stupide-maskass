import React from 'react';
import ColPlayer from '../ColPlayer/ColPlayer'
import './AppLeftColBottom.css'

export default class AppLeftColBottom extends React.Component {
	constructor(props){
		super(props);
	}

	render(){

		return (
            <div className="AppLeftColBottom">
                <ColPlayer player={this.props.settings.playerAreas[0]} />
                {(this.props.settings.playersNb > 2) && <ColPlayer player={this.props.settings.playerAreas[1]} />}
            </div>
		)
	}
}