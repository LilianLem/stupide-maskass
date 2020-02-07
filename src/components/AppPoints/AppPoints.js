import React from 'react';
import PointsBox from './PointsBox'
import './AppPoints.css'

export default class AppPoints extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
	        <section className="AppPoints">
	            <h1>Mes points obtenus</h1>
	            <PointsBox settings={this.props.settings} />
	        </section>
		)
	}
}