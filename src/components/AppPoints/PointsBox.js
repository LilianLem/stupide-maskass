import React from 'react';
import PointsCarte from './PointsCarte'
import './PointsBox.css'

export default class PointsBox extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
            <div className="PointsBox">
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
                <PointsCarte/>
            </div>
		)
	}
}