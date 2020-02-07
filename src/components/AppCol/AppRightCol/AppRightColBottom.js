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
                {(this.props.settings.playersNb > 3) && <ColPlayer player={'C'} />}
                {(this.props.settings.playersNb > 4) && <ColPlayer player={'D'} />}
            </div>
		)
	}
}