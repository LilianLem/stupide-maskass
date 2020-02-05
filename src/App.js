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
        	playerNb: 0, // Non utilisé dans la version rendue
        	character: '', // A définir manuellement pour la version rendue dans App.js
        	hand: cardsArray,
        	lastPlayedCard: 0,
        	hasPlayed: false,
        	gainedPoints: [],
            winner: false
        }

        // À faire ici : demander le choix du nombre de joueurs avec div au premier plan

		this.state = {
			// Mettre les states ici
            player1: player,
            player2: player,
            player3: player,
            player4: player,
            player5: player,
        	playersNb: 2, // À modifier lorsque le code permettant de choisir le nombre de jours aura été fait
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

        // On ajoute toutes les cartes points au deck
        for (let i = -5; i <= 10; i++) {
            if(i != 0) {
                let newDeck = this.state.deck;
                newDeck.push(i);
                this.setState({deck: newDeck});
            }
        }

        // On définit les personnages correspondant au joueur dans le rendu actuel (fonctionnalité de choix de joueur indisponible)
        this.setState(prevState => ({
            player1: {
                ...prevState.player1,
                character: 'mario'
            }
        }));
        // this.setState(prevState => {
        //  let newState = { ...prevState.player2 };
        //  newState.character = 'dk';
        //  return { newState };});
        // this.setState(prevState => {
        //  let newState = { ...prevState.player3 };
        //  newState.character = 'luigi';
        //  return { newState };});
        // this.setState(prevState => {
        //  let newState = { ...prevState.player4 };
        //  newState.character = 'peach';
        //  return { newState };});
        // this.setState(prevState => {
        //  let newState = { ...prevState.player5 };
        //  newState.character = 'waluigi';
        //  return { newState };});
        console.log(this.state.player1.character);
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