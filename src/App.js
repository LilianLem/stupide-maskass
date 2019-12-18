import React from 'react';
import AppLeftCol from './components/AppCol/AppLeftCol/AppLeftCol'
import AppRightCol from './components/AppCol/AppRightCol/AppRightCol'
import AppDeck from './components/AppDeck/AppDeck'
import AppPoints from './components/AppPoints/AppPoints'
import AppHand from './components/AppHand/AppHand'
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			// Mettre les states ici
		};
	}

	// Mettre les fonctions ici

	render() {
	    return (
		    <div className="App">
		        <AppLeftCol/>
		        <AppRightCol/>
		        <AppDeck/>
		        <AppPoints/>
		        <AppHand/>
		    </div>
	    );
	}
}