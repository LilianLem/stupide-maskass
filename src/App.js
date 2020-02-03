import React from 'react';
import AppLeftCol from './components/AppCol/AppLeftCol/AppLeftCol'
import AppRightCol from './components/AppCol/AppRightCol/AppRightCol'
import AppDeck from './components/AppDeck/AppDeck'
import AppPoints from './components/AppPoints/AppPoints'
import AppHand from './components/AppHand/AppHand'
import './App.css';
import {checkGame} from './game'

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
            player1: player,
            player2: player,
            player3: player,
            player4: player,
            player5: player;
        	playersNb: 2, // À modifier lorsque le code permettant de choisir le nombre de jours aura été fait
        	deck: [], // À définir au lancement de la partie avec un setState
        	round: 0,
        	cardsOnBoard: [],
        	tieOnPreviousRound: false,
            currentDraw: [],
            displayDraw: false,
            displayDraw2: false,
            drawValue: 0,
            drawValue2: 0,
            isHandLocked: true,
            isHandDisplayed: false,
            isPlayerPointsDisplayed: false,
            displayPlayedCards: false
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