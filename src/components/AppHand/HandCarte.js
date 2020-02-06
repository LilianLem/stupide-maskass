import React from 'react';
import './HandCarte.css'

export default class HandCarte extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
	        <div className={this.props.cardStyleClasses} style={this.props.cardStyleInline} >{this.props.number}</div>
		)
	}
}