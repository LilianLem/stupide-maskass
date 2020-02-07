import React from 'react';
import AppLeftColTop from './AppLeftColTop'
import AppLeftColBottom from './AppLeftColBottom'
import './AppLeftCol.css'

export default class AppLeftCol extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
	        <section className="AppLeftCol">
	            <AppLeftColTop round={this.props.round} />
	            <AppLeftColBottom/>
	        </section>
		)
	}
}