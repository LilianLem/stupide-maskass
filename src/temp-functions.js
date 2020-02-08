// TRÈS IMPORTANT : Pour tous les endroits où "state" est indiqué, utilise une variable avec "state_"  devant et on remplacera plus tard

/* Importé */
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

/* Importé */
startGame = () => {
	let _deck = generateDeck(-5, 10);
	_deck = shuffleCards(deck);
    this.setState({deck: _deck}, () => {console.log(this.state.deck);});

    this.setState({currentPlayer: 1}, () => {
    	toggleCurrentPlayerHandDisplay();
    	toggleCurrentPlayerPointsDisplay();
    });
    
    this.setState({showStartScreen: false});
    setupRound();
}

/* Importé */
setupRound = (setDoubleTie) => {
    // Initialiser la partie (ajouter 1 au compteur de manches et réinitialiser les states de chaque joueur indiquant qu'ils ont joué)
    this.setState({ round: this.state.round + 1});

	for (let player = 1; player <= this.state.playersNb; player++) {
		this.setState({['player${player}_hasPlayed']: false});
	}

    // Si setDoubleTie est vrai, on définit le state doubleTie à vrai, sinon on le définit à faux
    if(setDoubleTie)
    {
    	this.setState({tieOnPreviousRound: true});
    }
    else
    {
    	this.setState({tieOnPreviousRound: false});
    }

    drawCard();

	// return; On ne retourne aucune valeur
}

/* Importé */
drawCard = () => {
	// On tire une carte au hasard dans le tableau de cartes (variable availableCards) et on l'affiche (si doubleTie est faux, définir le state displayDraw à vrai, sinon définir displayDraw2 à vrai)
	// On la retire du tableau de cartes et on l'ajoute (push) au tableau des cartes en train d'être jouées (tableau state_currentDraw)
	let newDraw = this.state.currentDraw;

	let cards = this.state.availableCards;
	let drawnCard = cards[Math.floor(Math.random() * cards.length)];

	newDraw.push(drawnCard);

	if(this.state.tieOnPreviousRound)
	{
		this.setState({drawValue2: drawnCard});
		this.setState({displayDraw2: true});
	}
	else
	{
		this.setState({drawValue: drawnCard});
		this.setState({displayDraw: true});
	}

	this.setState({currentDraw: newDraw});

	toggleHandLock();

	// return; On ne retourne aucune valeur
}

/* Importé */
toggleHandLock = () => {
	// On bloque ou on débloque la main du joueur courant (on définit le state isHandLocked sur l'inverse de l'état actuel du state isHandLocked)
	// Cette fonction fera aussi se retourner les cartes de la main du joueur courant

	this.setState({isHandLocked: !this.state.isHandLocked});

    // return; On ne retourne aucune valeur
}

/* Importé */
storePlayedCard = (player,card) => {
	// On stocke la carte jouée dans le tableau des cartes jouées (variable playedCards qu'on définira au préalable hors de la fonction) à l'index du joueur courant (player)
	// On stocke également cette carte dans le state du joueur (player), dans le paramètre lastPlayedCard

	this.setState({[`player${player}_lastPlayedCard`]: card});

	// On supprime la carte de la main du joueur
	let playerHand = this.state[`player${player}_hand`];
	let cardIndex = playerHand.indexOf(card);
	playerHand.splice(cardIndex, 1);
	this.setState({[`player${player}_hand`]: playerHand});

	// return; On ne retourne aucune valeur
}

/* Importé */
cardIsChosen = (card) => {
	let player = this.state.currentPlayer;

	toggleHandLock();
	toggleCurrentPlayerHandDisplay();

	storePlayedCard(player, card);

	if(player == this.state.playersNb)
	{
		// toggleCurrentPlayerPointsDisplay();
		// Suite à faire
	}

	else
	{
		switchPlayer();
	}
}

/* Importé */
toggleCurrentPlayerHandDisplay = () => {
	// On affiche ou on cache la main du joueur courant (on définit le state isHandDisplayed sur l'inverse de l'état actuel du state isHandDisplayed)

	this.setState({isHandDisplayed: !this.state.isHandDisplayed});

	// return; On ne retourne aucune valeur
}

/* Importé */
toggleCurrentPlayerPointsDisplay = () => {
	// On affiche ou on cache les cartes obtenues par le joueur courant (on définit le state isPlayerPointsDisplayed sur l'inverse de l'état actuel du state isPlayerPointsDisplayed)

	this.setState({isPlayerPointsDisplayed: !this.state.isPlayerPointsDisplayed});

	// return; On ne retourne aucune valeur
}

/* Importé */
// Attention : revoir plus en détails pour la sélection de la zone
togglePlayerAreaDisplay = (player) => {
	// On affiche ou on cache la zone d'un joueur (on définit la propriété displayed du state player sur l'inverse de son état actuel)
	// Je complèterai par d'autres éléments plus tard (notamment la rotation des zones)

	this.setState({[`player${player}_displayed`]: !this.state['player${player}_displayed']});

    // return; On ne retourne aucune valeur
}

/* Importé */
getPlayerPoints = (player) => {
	// On définit playerPoints comme étant égal à la propriété points DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT)
	let gainedPoints = getPlayerPointsCards(player);

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	playerPoints = gainedPoints.reduce(reducer);

	return playerPoints;
}

/* Importé */
getPlayerPointsCards = (player) => {
	// On définit playerPoints comme étant égal à la propriété cards DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT)
	playerCards = this.state[`player${player}_gainedPoints`];

	return playerCards;
}

/* Importé */
switchPlayer = () => {
	let nextPlayer = this.state.currentPlayer + 1;

	toggleCurrentPlayerPointsDisplay();
	togglePlayerAreaDisplay(nextPlayer);

	setTimeout(function(){
		togglePlayerAreaDisplay(this.state.currentPlayer);

		this.state.currentPlayer = nextPlayer; // Ne pas oublier plus tard de définir les dos et devants de carte de la main en fonction du joueur courant

		toggleCurrentPlayerPointsDisplay();
		toggleCurrentPlayerHandDisplay();
		toggleHandLock();
	}, 5000);

    // return; On ne retourne aucune valeur
}

/* Importé */
togglePlayedCardsDisplay = () => {
	// On affiche ou on cache les cartes jouées pendant la manche à la place de la zone des points (on définit le state displayPlayedCards sur l'inverse de son état actuel)
	this.setState({displayPlayedCards: !this.state.displayPlayedCards});

    // return; On ne retourne aucune valeur
}

preparePointsDisplay = () => {
	toggleHandLock();
	toggleCurrentPlayerPointsDisplay();

	showPlayedCards();
}

/* Importé */
getMinPlayedCard = (playedCards) => {
	// On stocke dans la variable minCard la carte avec la valeur la plus faible dans le tableau playedCards

	minCard = Math.min(...playedCards);

	return minCard;
}

/* Importé */
getMaxPlayedCard = (playedCards) => {
	// On stocke dans la variable maxCard la carte avec la valeur la plus élevée dans le tableau playedCards

	maxCard = Math.max(...playedCards);

	return maxCard;
}

/* Importé */
isPlayedCardUnique = (card,playedCards) => {
	// On compte le nombre de fois où card est présent dans le tableau playedCards

	let playedCount = 0;
	playedCards.forEach(function(element){
		if(element == card) { playedCount++; }
		if(playedCount == 2){ return false; }
	})

	return true;
}

/* Importé */
getRoundWinner = (card,playedCards) => {
	// On récupère l'index du tableau où est la carte gagnante et on le stocke dans la variable winner
	let winner = playedCards.indexOf(card);

	return winner;
}

/* Importé */
storeGainedPoints = (player) => {
	// On ajoute (push) à la propriété points DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT) chaque élément du tableau points (boucle foreach)
	let newPointsArray = this.state[`player${player}_gainedPoints`];
	newPointsArray.push(this.state.drawValue));

	if(this.state.tieOnPreviousRound == false)
	{
		newPointsArray.push(this.state.drawValue2);
	}

	this.setState({[`player${player}_gainedPoints`]: newPointsArray});

    return newPointsArray;
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

toggleEndingScreenDisplay = () => {
	// On affiche ou on cache l'écran de fin (on définit le state displayEndingScreen sur l'inverse de son état actuel)
	this.setState({toggleEndingScreenDisplay: !this.state.toggleEndingScreenDisplay});

    // return; On ne retourne aucune valeur
}

/* Importé */
defineWinners = () => {
	let playersScore = []; // On ajoute le score de chaque joueur (situé dans players -> player1/2/3/4 -> pointsTotal) avec une boucle foreach dans ce tableau au format clé => valeur, avec la clé correspondant au n° du joueur, et la valeur correspondant à ses points

	let score = 0;
	for (let player = 1; player <= this.state.playersNb; player++) {
		score = getPlayerPoints(player);
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

/* Importé */
toggleWinner = (player) => {
	// On définit la propriété winner DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT) sur l'inverse de son état actuel)
	// Il ne faudra pas oublier de définir le fait que ce state entraîne l'affichage d'une couronne à côté du joueur dans l'écran de fin et met son nom en doré
	this.setState({[`player${player}_winner`]: !this.state['player${player}_winner']});

    // return; On ne retourne aucune valeur
}

/* Importé */
endGame = () => {
	let winners = defineWinners();

	winners.forEach(element => toggleWinner(element));

	// Pour chaque élément du tableau winners, on exécute la fonction toggleWinner() avec l'élément du tableau en paramètre.

	// toggleEndingScreenDisplay(); --> Ecran non existant
	console.log("GAGNANTS :");
	console.log(winners);

    // return; On ne retourne aucune valeur
}