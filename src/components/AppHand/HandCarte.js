import React from 'react';
import './HandCarte.css'

export default class HandCarte extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
	        <div onClick={() => this.props.cardIsChosen(this.props.value)} className={this.props.cardStyleClasses} style={this.props.cardStyleInline} >
	        	{this.props.showCardValues &&
		        	<div className="HandCarteTopLayout">
		        		<p>{this.props.value}</p>
		        		<p>{this.props.value}</p>
		        		<p>{this.props.value}</p>
		        		<p>{this.props.value}</p>
		        	</div>
		        }
	        	{this.props.showCardValues &&
		        	<div className="HandCarteBottomLayout">
		        		<p>{this.props.value}</p>
		        	</div>
	        	}
	        </div>
		)
	}
}