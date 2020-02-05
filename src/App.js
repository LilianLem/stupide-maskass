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

        // À faire ici : demander le choix du nombre de joueurs avec div au premier plan

		this.state = {
			// Mettre les states ici
            player1_character: 'mario',
            player1_hand: cardsArray,
            player1_lastPlayedCard: 0,
            player1_hasPlayed: false,
            player1_gainedPoints: [],
            player1_winner: false,

            player2_character: 'dk',
            player2_hand: cardsArray,
            player2_lastPlayedCard: 0,
            player2_hasPlayed: false,
            player2_gainedPoints: [],
            player2_winner: false,

            player3_character: 'luigi',
            player3_hand: cardsArray,
            player3_lastPlayedCard: 0,
            player3_hasPlayed: false,
            player3_gainedPoints: [],
            player3_winner: false,

            player4_character: 'peach',
            player4_hand: cardsArray,
            player4_lastPlayedCard: 0,
            player4_hasPlayed: false,
            player4_gainedPoints: [],
            player4_winner: false,

            player5_character: 'waluigi',
            player5_hand: cardsArray,
            player5_lastPlayedCard: 0,
            player5_hasPlayed: false,
            player5_gainedPoints: [],
            player5_winner: false,

        	playersNb: 5, // À modifier lorsque le code permettant de choisir le nombre de jours aura été fait
        	deck: [], // À définir au lancement de la partie avec un setState
        	round: 0,
            currentPlayer: 0,
        	cardsOnBoard: [],
        	tieOnPreviousRound: false,
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

    testMyCode = () => {
        // On ajoute toutes les cartes points au deck

    }

    generateDeck = () => {
        let newDeck = this.state.deck;
        for (let i = -5; i <= 10; i++) {
            if(i != 0) {
                newDeck.push(i);
            }
        }
        this.setState({deck: newDeck}, () => {console.log(this.state.deck);});
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
                <button onClick={() => this.testMyCode()} className="TestingButton">TEST</button>
		    </div>
	    );
	}
}