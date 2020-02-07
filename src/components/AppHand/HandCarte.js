import React from 'react';
import './HandCarte.css'

export default class HandCarte extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
	        <div onClick={() => this.props.cardIsChosen(this.props.number)} className={this.props.cardStyleClasses} style={this.props.cardStyleInline} >
	        	{this.props.showCardValues &&
		        	<div className="HandCarteTopLayout">
		        		<p>{this.props.number}</p>
		        		<p>{this.props.number}</p>
		        		<p>{this.props.number}</p>
		        		<p>{this.props.number}</p>
		        	</div>
		        }
	        	{this.props.showCardValues &&
		        	<div className="HandCarteBottomLayout">
		        		<p>{this.props.number}</p>
		        	</div>
	        	}
	        </div>
		)
	}
}