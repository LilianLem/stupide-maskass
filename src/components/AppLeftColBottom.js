import React from 'react';
import ColPlayer from './ColPlayer'
import './AppLeftColBottom.css'

export default class AppLeftColBottom extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
            <div className="AppLeftColBottom">
                <ColPlayer value={'A'} />
                <ColPlayer value={'B'} />
            </div>
		)
	}
}