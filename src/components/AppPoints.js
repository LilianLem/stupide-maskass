import React from 'react';
import PointsBox from './PointsBox'
import './AppPoints.css'

export default class AppPoints extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
	        <div className="AppPoints">
	            <h1>Mes points obtenus</h1>
	            <PointsBox/>
	        </div>
		)
	}
}