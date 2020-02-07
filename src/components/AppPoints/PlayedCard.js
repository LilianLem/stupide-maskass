import React from 'react';
import './PlayedCard.css'

export default class PlayedCard extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
	        <div className={this.props.cardStyleClasses} >
	        	<div className="PlayedCardTopLayout">
	        		<p>{this.props.value}</p>
	        		<p>{this.props.value}</p>
	        		<p>{this.props.value}</p>
	        		<p>{this.props.value}</p>
	        	</div>
	        	<div className="PlayedCardBottomLayout">
	        		<p>{this.props.value}</p>
	        	</div>
	        </div>
		)
	}
}