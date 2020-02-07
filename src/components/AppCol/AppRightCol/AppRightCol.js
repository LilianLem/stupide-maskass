import React from 'react';
import AppRightColTop from './AppRightColTop'
import AppRightColBottom from './AppRightColBottom'
import './AppRightCol.css'

export default class AppRightCol extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
	        <section className="AppRightCol">
	            <AppRightColTop/>
	            <AppRightColBottom settings={this.props.settings} />
	        </section>
		)
	}
}