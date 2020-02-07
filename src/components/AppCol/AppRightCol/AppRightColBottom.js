import React from 'react';
import ColPlayer from '../ColPlayer/ColPlayer'
import './AppRightColBottom.css'

export default class AppRightColBottom extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
            <div className="AppRightColBottom">
                {(this.props.settings.playersNb > 3) && <ColPlayer player={this.props.settings.playerAreas[2]} />}
                {(this.props.settings.playersNb > 4) && <ColPlayer player={this.props.settings.playerAreas[3]} />}
            </div>
		)
	}
}