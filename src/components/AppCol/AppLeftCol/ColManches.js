import React from 'react';
import './ColManches.css'

export default class ColManches extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="ColManches"><p>Manche {this.props.round} sur 15</p></div>
		)
	}
}