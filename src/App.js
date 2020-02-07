import React from 'react';
import Game from './components/Game'
import StartScreen from './components/StartScreen'
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

        // À faire ici : demander le choix du nombre de joueurs avec div au premier plan

		this.state = {
			// Mettre les states ici
            player1_character: 'mario',
            player1_hand: cardsArray,
            player1_lastPlayedCard: 0,
            player1_gainedPoints: [],
            player1_displayed: false,
            player1_winner: false,

            player2_character: 'dk',
            player2_hand: cardsArray,
            player2_lastPlayedCard: 0,
            player2_gainedPoints: [],
            player2_displayed: true,
            player2_winner: false,

            player3_character: 'luigi',
            player3_hand: cardsArray,
            player3_lastPlayedCard: 0,
            player3_gainedPoints: [],
            player3_displayed: true,
            player3_winner: false,

            player4_character: 'peach',
            player4_hand: cardsArray,
            player4_lastPlayedCard: 0,
            player4_gainedPoints: [],
            player4_displayed: true,
            player4_winner: false,

            player5_character: 'waluigi',
            player5_hand: cardsArray,
            player5_lastPlayedCard: 0,
            player5_gainedPoints: [],
            player5_displayed: true,
            player5_winner: false,

        	playersNb: 5, // À modifier lorsque le code permettant de choisir le nombre de jours aura été fait
        	deck: [], // À définir au lancement de la partie avec un setState
        	round: 0,
            currentPlayer: 0,
            colPlayerAreas: [],
        	tieOnPreviousRound: false,
            displayDraw: false,
            displayDraw2: false,
            drawValue: 0,
            drawValue2: 0,
            isHandLocked: true,
            isHandDisplayed: false,
            isPlayerPointsDisplayed: false,
            showStartScreen: true,
            displayPlayedCards: false
		};
	}

    testMyCode = () => {
        // On ajoute toutes les cartes points au deck
        console.log(this.state);
    }

    generateDeck = (minCard, maxCard) => {
        let newDeck = this.state.deck;
        for (let i = minCard; i <= maxCard; i++) {
            if(i !== 0) {
                newDeck.push(i);
            }
        }

        return newDeck;
    }

    generatePlayerAreas = () => {
        let playerAreas = [];
        for (let i = 2; i <= this.state.playersNb; i++) {
            playerAreas.push(i);
        }
        this.setState({colPlayerAreas: playerAreas});
    }

    shuffleCards = (availableCards) => {
        // On mélange les cartes du tableau availableCards

        let j, x;

        for (let i = availableCards.length - 1; i > 0; i--)
        {
            j = Math.floor(Math.random() * (i + 1));
            x = availableCards[i];
            availableCards[i] = availableCards[j];
            availableCards[j] = x;
        }

        return availableCards;
    }

    startGame = () => {
        let _deck = this.generateDeck(-5, 10);
        _deck = this.shuffleCards(_deck);
        this.setState({deck: _deck}, () => {console.log(this.state.deck);});
        this.generatePlayerAreas();

        this.setState({currentPlayer: 1}, () => {
            this.toggleCurrentPlayerHandDisplay();
            this.toggleCurrentPlayerPointsDisplay();
        });
        
        this.setState({showStartScreen: false});
        this.setupRound();
    }

    setupRound = (setDoubleTie) => {
        // Initialiser la partie (ajouter 1 au compteur de manches et réinitialiser les states de chaque joueur indiquant qu'ils ont joué)
        this.setState({ round: this.state.round + 1});

        // for (let player = 1; player <= this.state.playersNb; player++) {
        //     this.setState({[`player${player}_hasPlayed`]: false});
        // }

        // Si setDoubleTie est vrai, on définit le state doubleTie à vrai, sinon on le définit à faux
        if(setDoubleTie)
        {
            this.setState({tieOnPreviousRound: true});
        }
        else
        {
            this.setState({tieOnPreviousRound: false, drawValue: 0, drawValue2: 0, displayDraw: false, displayDraw2: false});
        }

        this.drawCard();

        // return; On ne retourne aucune valeur
    }

    drawCard = () => {
        // On tire une carte au hasard dans le tableau de cartes (variable availableCards) et on l'affiche (si doubleTie est faux, définir le state displayDraw à vrai, sinon définir displayDraw2 à vrai)
        // On la retire du tableau de cartes et on l'ajoute (push) au tableau des cartes en train d'être jouées (tableau state_currentDraw)
        let cards = this.state.deck;
        let drawnCard = cards[0];

        if(this.state.tieOnPreviousRound == true)
        {
            this.setState({drawValue2: drawnCard});
            this.setState({displayDraw2: true});
        }
        else
        {
            this.setState({drawValue: drawnCard});
            this.setState({displayDraw: true});
        }

        this.toggleHandLock();

        cards.shift();
        this.setState({deck: cards});

        // return; On ne retourne aucune valeur
    }

    storePlayedCard = (player,card) => {
        // On stocke la carte jouée dans le tableau des cartes jouées (variable playedCards qu'on définira au préalable hors de la fonction) à l'index du joueur courant (player)
        // On stocke également cette carte dans le state du joueur (player), dans le paramètre lastPlayedCard

        this.setState({[`player${player}_lastPlayedCard`]: card});

        // On supprime la carte de la main du joueur
        let playerHand = Array.from(this.state[`player${player}_hand`]);
        let cardIndex = playerHand.indexOf(card);
        playerHand.splice(cardIndex, 1);
        this.setState({[`player${player}_hand`]: playerHand});

        // return; On ne retourne aucune valeur
    }

    cardIsChosen = (card) => {
        let player = this.state.currentPlayer;

        this.toggleHandLock();
        this.toggleCurrentPlayerHandDisplay();

        this.storePlayedCard(player, card);

        if(player == this.state.playersNb)
        {
            // toggleCurrentPlayerPointsDisplay();
            // Suite à faire
        }

        else
        {
            this.switchPlayer();
        }
    }

    switchPlayer = () => {
        let nextPlayer = this.state.currentPlayer + 1;

        this.toggleCurrentPlayerPointsDisplay();
        this.togglePlayerAreaDisplay(nextPlayer);

        setTimeout(() => {
            this.togglePlayerAreaDisplay(this.state.currentPlayer);

            this.state.currentPlayer = nextPlayer; // Ne pas oublier plus tard de définir les dos et devants de carte de la main en fonction du joueur courant

            this.toggleCurrentPlayerPointsDisplay();
            this.toggleCurrentPlayerHandDisplay();
            this.toggleHandLock();
        }, 500); // Temps d'attente réduit pour la présentation du projet

        // return; On ne retourne aucune valeur
    }

    toggleHandLock = () => {
        // On bloque ou on débloque la main du joueur courant (on définit le state isHandLocked sur l'inverse de l'état actuel du state isHandLocked)
        // Cette fonction fera aussi se retourner les cartes de la main du joueur courant

        this.setState({isHandLocked: !this.state.isHandLocked});

        // return; On ne retourne aucune valeur
    }

    toggleCurrentPlayerHandDisplay = () => {
        // On affiche ou on cache la main du joueur courant (on définit le state isHandDisplayed sur l'inverse de l'état actuel du state isHandDisplayed)

        this.setState({isHandDisplayed: !this.state.isHandDisplayed});

        // return; On ne retourne aucune valeur
    }

    toggleCurrentPlayerPointsDisplay = () => {
        // On affiche ou on cache les cartes obtenues par le joueur courant (on définit le state isPlayerPointsDisplayed sur l'inverse de l'état actuel du state isPlayerPointsDisplayed)

        this.setState({isPlayerPointsDisplayed: !this.state.isPlayerPointsDisplayed});

        // return; On ne retourne aucune valeur
    }

    // Attention : revoir plus en détails pour la sélection de la zone
    togglePlayerAreaDisplay = (player) => {
        // On affiche ou on cache la zone d'un joueur (on définit la propriété displayed du state player sur l'inverse de son état actuel)
        // Je complèterai par d'autres éléments plus tard (notamment la rotation des zones)

        this.setState({[`player${player}_displayed`]: !this.state['player${player}_displayed']});

        // return; On ne retourne aucune valeur
    }

	// Mettre les fonctions ici

	render() {
	    return (
            <div className="App">
                <StartScreen showStartScreen={this.state.showStartScreen} startGame={this.startGame}/>
    		    <Game states={this.state} testMyCode={this.testMyCode} cardIsChosen={this.cardIsChosen} />
            </div>
	    );
	}
}