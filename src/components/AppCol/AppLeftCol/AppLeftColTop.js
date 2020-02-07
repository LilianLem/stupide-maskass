import React from 'react';
import ColLogo from './ColLogo'
import ColManches from './ColManches'
import './AppLeftColTop.css'

export default class AppLeftColTop extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
            <div className="AppLeftColTop">
                <ColLogo/>
                <ColManches round={this.props.round} />
            </div>
		)
	}
}