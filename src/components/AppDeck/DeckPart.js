import React from 'react';
import './DeckPart.css'

export default class DeckPart extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
	        <div className={this.props.cardStyleClasses}><p>{this.props.value > 0 && "+"}{this.props.value}</p></div>
		)
	}
}