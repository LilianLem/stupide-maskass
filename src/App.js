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
            player1_playedCard: 0,
            player1_gainedPoints: [],
            player1_winner: false,

            player2_character: 'dk',
            player2_hand: cardsArray,
            player2_lastPlayedCard: 0,
            player2_playedCard: 0,
            player2_gainedPoints: [],
            player2_winner: false,

            player3_character: 'luigi',
            player3_hand: cardsArray,
            player3_lastPlayedCard: 0,
            player3_playedCard: 0,
            player3_gainedPoints: [],
            player3_winner: false,

            player4_character: 'peach',
            player4_hand: cardsArray,
            player4_lastPlayedCard: 0,
            player4_playedCard: 0,
            player4_gainedPoints: [],
            player4_winner: false,

            player5_character: 'waluigi',
            player5_hand: cardsArray,
            player5_lastPlayedCard: 0,
            player5_playedCard: 0,
            player5_gainedPoints: [],
            player5_winner: false,

        	playersNb: 5, // À modifier lorsque le code permettant de choisir le nombre de jours aura été fait
        	deck: [], // À définir au lancement de la partie avec un setState
        	round: 0,
            currentPlayer: 0,
            playerAreas: [],
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
        this.setState({playerAreas: playerAreas});
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
        this.generatePlayerAreas();
        this.moveCardsToLastPlayedCards();
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

        this.setState({[`player${player}_playedCard`]: card});

        // On supprime la carte de la main du joueur
        let playerHand = Array.from(this.state[`player${player}_hand`]);
        let cardIndex = playerHand.indexOf(card);
        playerHand.splice(cardIndex, 1);
        this.setState({[`player${player}_hand`]: playerHand});

        // return; On ne retourne aucune valeur
    }

    moveCardsToLastPlayedCards = () => {
        let playedCard;
        for (let i = 1; i <= this.state.playersNb; i++) 
        {
            playedCard = this.state[`player${i}_playedCard`];
            this.setState({[`player${i}_lastPlayedCard`]: playedCard});
            this.setState({[`player${i}_playedCard`]: 0});
        }
    }

    cardIsChosen = (card) => {
        let player = this.state.currentPlayer;

        this.toggleHandLock();
        this.toggleCurrentPlayerHandDisplay();

        this.storePlayedCard(player, card);

        if(player == this.state.playersNb)
        {
            this.togglePlayedCardsDisplay();

            setTimeout(() => {
                this.checkPlayedCards();

            }, 2000);
        }

        else
        {
            this.switchPlayer();
        }
    }

    checkPlayedCards = () => {
        let pointsToWin = this.state.drawValue + this.state.drawValue2;

        let playedCards = [];
        for (let i = 1; i <= this.state.playersNb; i++)
        {
            playedCards.push(this.state[`player${i}_playedCard`]);
        }

        let winningValue;
        if(pointsToWin >= 0)
        {
            winningValue = this.getMaxPlayedCard(playedCards);
        }
        else
        {
            winningValue = this.getMinPlayedCard(playedCards);
        }

        let isCardUnique = this.isPlayedCardUnique(winningValue,playedCards);

        if(isCardUnique)
        {
            console.log('winningValue : '+winningValue+' playedCards : '+playedCards);
            let winner = this.getRoundWinner(winningValue,playedCards);
            this.storeGainedPoints(winner);

            if(this.state.round == 15)
            {
                this.endGame();
            }

            else
            {
                this.setupRound();
                this.switchPlayer();
                this.togglePlayedCardsDisplay();
                this.toggleHandLock();
            }
        }
        else
        {

        }
    }

    switchPlayer = () => {
        let nextPlayer;
        if(this.state.currentPlayer == this.state.playersNb)
        {
            nextPlayer = 1;
        }
        else
        {
            nextPlayer = this.state.currentPlayer + 1;
        }

        this.toggleCurrentPlayerPointsDisplay();

        setTimeout(() => {
            this.switchPlayerAreas(nextPlayer);

            this.state.currentPlayer = nextPlayer; // Ne pas oublier plus tard de définir les dos et devants de carte de la main en fonction du joueur courant

            this.toggleCurrentPlayerPointsDisplay();
            this.toggleCurrentPlayerHandDisplay();
            this.toggleHandLock();
        }, 500); // Temps d'attente réduit pour la présentation du projet

        // return; On ne retourne aucune valeur
    }

    switchPlayerAreas = (nextPlayer) => {
        // On affiche ou on cache la zone d'un joueur (on définit la propriété displayed du state player sur l'inverse de son état actuel)
        // Je complèterai par d'autres éléments plus tard (notamment la rotation des zones)

        let playerAreas = this.state.playerAreas;
        if(nextPlayer == 1)
        {
            this.generatePlayerAreas();
        }
        else
        {
            let nextPlayerIndex = playerAreas.indexOf(nextPlayer);
            playerAreas[nextPlayerIndex] = this.state.currentPlayer;
        }

        // return; On ne retourne aucune valeur
    }

    getMinPlayedCard = (playedCards) => {
        // On stocke dans la variable minCard la carte avec la valeur la plus faible dans le tableau playedCards

        let minCard = Math.min(...playedCards);

        return minCard;
    }

    getMaxPlayedCard = (playedCards) => {
        // On stocke dans la variable maxCard la carte avec la valeur la plus élevée dans le tableau playedCards
        console.log('jdsgjidfgjifdjgdfjg');
        console.log(playedCards);
        let maxCard = Math.max(...playedCards);

        return maxCard;
    }

    isPlayedCardUnique = (card,playedCards) => {
        // On compte le nombre de fois où card est présent dans le tableau playedCards

        let playedCount = 0;
        playedCards.forEach(function(element){
            if(element == card) { playedCount++; }
            if(playedCount == 2){ return false; }
        })

        return true;
    }

    getRoundWinner = (card,playedCards) => {
        // On récupère l'index du tableau où est la carte gagnante et on le stocke dans la variable winner
        let winner = playedCards.indexOf(card) + 1;

        return winner;
    }

    storeGainedPoints = (player) => {
        // On ajoute (push) à la propriété points DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT) chaque élément du tableau points (boucle foreach)
        let newPointsArray = this.state[`player${player}_gainedPoints`];
        newPointsArray.push(this.state.drawValue);

        if(this.state.tieOnPreviousRound == true)
        {
            newPointsArray.push(this.state.drawValue2);
        }

        this.setState({[`player${player}_gainedPoints`]: newPointsArray});

        return newPointsArray;
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

    togglePlayedCardsDisplay = () => {
        // On affiche ou on cache les cartes jouées pendant la manche à la place de la zone des points (on définit le state displayPlayedCards sur l'inverse de son état actuel)
        this.setState({displayPlayedCards: !this.state.displayPlayedCards});

        // return; On ne retourne aucune valeur
    }

    defineWinners = () => {
        let playersScore = []; // On ajoute le score de chaque joueur (situé dans players -> player1/2/3/4 -> pointsTotal) avec une boucle foreach dans ce tableau au format clé => valeur, avec la clé correspondant au n° du joueur, et la valeur correspondant à ses points

        let score = 0;
        for (let player = 1; player <= this.state.playersNb; player++) {
            score = this.getPlayerPoints(player);
            playersScore[player] = score; 
        }

        let valueCounter = 0;
        let maxScore = Math.max(...playersScore);

        playersScore.forEach(function(element){
            if(element == maxScore)
            {
                valueCounter++;
            }
        })

        let winners = [];
        if(valueCounter == 1)
        {
            winners.push(playersScore.indexOf(maxScore));
        }
        else
        {
            let newArray = [];
            for (let i = 1; i <= playersScore.length; i++) {
                if(playersScore[i] != maxScore)
                {
                    newArray[i] = playersScore[i];
                }
            }

            let maxScore = Math.max(...newArray);

            for (let i = 1; i <= newArray.length; i++) {
                if(newArray[i] == maxScore)
                {
                    winners.push(i);
                }
            }
        }

        return winners;
    }

    toggleWinner = (player) => {
        // On définit la propriété winner DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT) sur l'inverse de son état actuel)
        // Il ne faudra pas oublier de définir le fait que ce state entraîne l'affichage d'une couronne à côté du joueur dans l'écran de fin et met son nom en doré
        this.setState({[`player${player}_winner`]: !this.state['player${player}_winner']});

        // return; On ne retourne aucune valeur
    }

    endGame = () => {
        let winners = this.defineWinners();

        winners.forEach(element => this.toggleWinner(element));

        // Pour chaque élément du tableau winners, on exécute la fonction toggleWinner() avec l'élément du tableau en paramètre.

        // toggleEndingScreenDisplay(); --> Ecran non existant
        console.log("GAGNANTS :");
        console.log(winners);

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