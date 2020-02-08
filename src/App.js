import React from 'react';
import Game from './components/Game'
import StartScreen from './components/StartScreen'
import NextPlayerButton from './components/NextPlayerButton'
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
        	deck: [],
        	round: 0,
            currentPlayer: 0,
            playerAreas: [],
            doubleTieOnNextRound: false,
        	tieOnPreviousRound: false,
            displayDraw: false,
            displayDraw2: false,
            drawValue: 0,
            drawValue2: 0,
            isHandLocked: true,
            isHandDisplayed: false,
            isPlayerPointsDisplayed: false,
            isNextPlayerButtonDisplayed: 'none',
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
        this.toggleHandLock();
        this.setupRound(true);
    }

    setupRound = (isFirstRound) => {
        // Initialiser la partie 

        if(!isFirstRound)
        {
            this.switchPlayer();
            this.togglePlayedCardsDisplay();
        }

        this.setState({ round: this.state.round + 1});
        this.generatePlayerAreas();
        this.moveCardsToLastPlayedCards();

        if(this.state.doubleTieOnNextRound)
        {
            this.setState({
                doubleTieOnNextRound: false,
                tieOnPreviousRound: true
            }, this.drawCard);
        }
        else
        {
            this.setState({tieOnPreviousRound: false, drawValue: 0, drawValue2: 0, displayDraw: false, displayDraw2: false}, this.drawCard);
        }

        //this.drawCard();

        // return; On ne retourne aucune valeur
    }

    drawCard = () => {
        // On tire une carte au hasard dans le tableau de cartes (variable availableCards) et on l'affiche (si doubleTie est faux, définir le state displayDraw à vrai, sinon définir displayDraw2 à vrai)
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

        cards.shift();
        this.setState({deck: cards});

        // return; On ne retourne aucune valeur
    }

    storePlayedCard = (player,card) => {
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
                let pointsToWin = this.state.drawValue + this.state.drawValue2;
                let checkResult = this.checkPlayedCards(pointsToWin);

                if(checkResult.isCardUnique == true)
                {
                    console.log('winningValue : '+checkResult.winningValue+' playedCards : '+checkResult.playedCards);
                    let winner = this.getRoundWinner(checkResult.winningValue,checkResult.playedCards);
                    this.storeGainedPoints(winner);

                    if(this.state.round == 15)
                    {
                        this.endGame();
                    }

                    else
                    {
                        this.displayNextPlayerButton('round');
                    }
                }
                else
                {
                    let newCardsToCheck = this.simpleTie_getNewArray(checkResult.winningValue, checkResult.playedCards);
                    checkResult = this.checkPlayedCards(pointsToWin,newCardsToCheck);

                    if(checkResult.isCardUnique == true)
                    {
                        console.log('winningValue : '+checkResult.winningValue+' playedCards : '+checkResult.playedCards);
                        let winner = this.getRoundWinner(checkResult.winningValue,checkResult.playedCards);
                        this.storeGainedPoints(winner);

                        if(this.state.round == 15)
                        {
                            this.endGame();
                        }

                        else
                        {
                            this.displayNextPlayerButton('round');
                        }
                    }

                    else
                    {
                        if(this.state.round == 15)
                        {
                            this.endGame();
                        }

                        else
                        {
                            if(this.state.tieOnPreviousRound == true){
                                this.displayNextPlayerButton('round');
                            }
                            else {
                                this.setState({doubleTieOnNextRound: true});
                                this.displayNextPlayerButton('round');
                            }
                        }
                    }
                }
            }, 2000);
        }

        else
        {
            this.displayNextPlayerButton('player');
        }
    }

    checkPlayedCards = (pointsToWin,simpleTie_array) => {
        let playedCards = [];
        if(simpleTie_array)
        {
            playedCards = simpleTie_array;
        }

        else
        {
            for (let i = 1; i <= this.state.playersNb; i++)
            {
                playedCards.push(this.state[`player${i}_playedCard`]);
            }
        }

        let winningValue;
        if(pointsToWin >= 0)
        {
            winningValue = this.getMaxPlayedCard(playedCards);
        }
        else
        {
            if(simpleTie_array)
            {
                playedCards = simpleTie_array.map((element) => {
                    if(element == 0) {return 16;}
                    else {return element;}
                })
            }

            winningValue = this.getMinPlayedCard(playedCards);
        }

        let isCardUnique = this.isPlayedCardUnique(winningValue,playedCards);

        return {
            isCardUnique: isCardUnique,
            winningValue: winningValue,
            playedCards: playedCards
        }
    }

    switchPlayer = () => {
        this.displayNextPlayerButton('none');

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

        this.switchPlayerAreas(nextPlayer);

        this.state.currentPlayer = nextPlayer;

        this.toggleCurrentPlayerPointsDisplay();
        this.toggleCurrentPlayerHandDisplay();
        this.toggleHandLock();

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

        let maxCard = Math.max(...playedCards);

        return maxCard;
    }

    isPlayedCardUnique = (card,playedCards) => {
        // On compte le nombre de fois où card est présent dans le tableau playedCards

        let playedCount = 0;
        playedCards.forEach(function(element){
            if(element == card) { playedCount++; }
        })
        if(playedCount > 1 || playedCount == this.state.playersNb){ return false; }
        else { return true; }
    }

    simpleTie_getNewArray = (card,playedCards) => {
        // Cette fonction sera utilisée lorsqu'il y a égalité (donc que deux joueurs ont la carte la plus forte ou la plus faible)

        // On supprime les valeurs correspondant à card du tableau playedCards (avec un foreach comparant les valeurs du tableau playedCards à card)
        let newArray = [];
        playedCards.forEach(function(element){
            if(element == card) {newArray.push(0);}
            else {newArray.push(element);}
        })

        return newArray;
    }

    getRoundWinner = (card,playedCards) => {
        // On récupère l'index du tableau où est la carte gagnante et on le stocke dans la variable winner
        let winner = playedCards.indexOf(card) + 1;

        return winner;
    }

    storeGainedPoints = (player) => {
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

    displayNextPlayerButton = (callType) => {
        // On affiche ou on cache le bouton permettant de passer au joueur suivant ou de commencer le round suivant
        this.setState({isNextPlayerButtonDisplayed: callType});

        // return; On ne retourne aucune valeur
    }

    defineWinners = () => {
        let playersScore = [];

        let score = 0;
        for (let player = 1; player <= this.state.playersNb; player++) {
            score = this.getPlayerPoints(player);
            playersScore.push(score); 
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
            winners.push(playersScore.indexOf(maxScore) + 1);
        }
        else if(valueCounter == this.state.playersNb)
        {
            for (let i = 1; i <= this.state.playersNb; i++) {
                winners.push(i);
            }
        }
        else
        {
            let newArray = [];
            let newPlayersArray = [];
            for (let i = 1; i <= this.state.playersNb; i++) {
                if(playersScore[i-1] != maxScore)
                {
                    newArray.push(playersScore[i-1]);
                    newPlayersArray.push(i);
                }
            }

            maxScore = Math.max(...newArray);

            for (let i = 0; i < newArray.length; i++) {
                if(newArray[i] == maxScore)
                {
                    winners.push(newPlayersArray[i]);
                }
            }
        }

        return winners;
    }

    getPlayerPoints = (player) => {
        // On définit playerPoints comme étant égal à la propriété points DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT)
        let gainedPoints = this.getPlayerPointsCards(player);

        if(gainedPoints.length == 0)
        {
            return 0;
        }

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let playerPoints = gainedPoints.reduce(reducer);

        return playerPoints;
    }

    getPlayerPointsCards = (player) => {
        // On définit playerPoints comme étant égal à la propriété cards DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT)
        let playerCards = this.state[`player${player}_gainedPoints`];

        return playerCards;
    }

    toggleWinner = (player) => {
        this.setState({[`player${player}_winner`]: !this.state['player${player}_winner']});

        // return; On ne retourne aucune valeur
    }

    endGame = () => {
        let winners = this.defineWinners();

        winners.forEach(element => this.toggleWinner(element));

        // toggleEndingScreenDisplay(); --> Ecran non existant
        console.log("GAGNANTS :");
        console.log(winners);

        console.log("SCORES :");
        for (let i = 1; i <= this.state.playersNb; i++)
        {
            console.log("JOUEUR "+i+" : "+this.getPlayerPoints(i));
            console.log("Points gagnés : ");
            console.log(this.state[`player${i}_gainedPoints`]);
        }

        // return; On ne retourne aucune valeur
    }

	render() {
	    return (
            <div className="App">
                <StartScreen showStartScreen={this.state.showStartScreen} startGame={this.startGame}/>
                <NextPlayerButton showNextPlayerButton={this.state.isNextPlayerButtonDisplayed} switchPlayer={this.switchPlayer} setupRound={this.setupRound} />
    		    <Game states={this.state} testMyCode={this.testMyCode} cardIsChosen={this.cardIsChosen} />
            </div>
	    );
	}
}