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

        // Tableau de carte ici
        let cardsArray = [];
        const maxCardsNumber = 15;

        for (let i = 1; i <= maxCardsNumber; i++) {
            cardsArray.push(i);
        }

        let player = {
        	playerNb: 0,
        	character: '',
        	hand: cardsArray,
        	lastPlayedCard: 0,
        	hasPlayed: false,
        	gainedPoints: []
        }

        // À faire ici : demander le choix du nombre de joueurs avec div au premier plan

		this.state = {
			// Mettre les states ici
        	playersNb: 2, // À modifier lorsque le code permettant de choisir le nombre de jours aura été fait
        	deck: [], // À définir au lancement de la partie avec un setState
        	round: 1,
        	cardsOnBoard: [],
        	tieOnPreviousRound: false
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