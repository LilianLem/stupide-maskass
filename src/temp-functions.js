// TRÈS IMPORTANT : Pour tous les endroits où "state" est indiqué, utilise une variable avec "state_"  devant et on remplacera plus tard

shuffleCards = (availableCards) => {
	// On mélange les cartes du tableau availableCards

    return availableCards;
}

setupRound = (setDoubleTie) => {
    // Initialiser la partie (ajouter 1 au compteur de manches et réinitialiser les states de chaque joueur indiquant qu'ils ont joué)

    // Si setDoubleTie est vrai, on définit le state doubleTie à vrai, sinon on le définit à faux
    
	// return; On ne retourne aucune valeur
}

drawCard = (state_currentDraw, state_doubleTie) => {
	// On tire une carte au hasard dans le tableau de cartes (variable availableCards) et on l'affiche (si doubleTie est faux, définir le state displayDraw à vrai, sinon définir displayDraw2 à vrai)
	// On la retire du tableau de cartes et on l'ajoute (push) au tableau des cartes en train d'être jouées (tableau state_currentDraw)

	return state_currentDraw;
}

toggleHand = () => {
	// On bloque ou on débloque la main du joueur courant (on définit le state isHandLocked sur l'inverse de l'état actuel du state isHandLocked)
	// Cette fonction fera aussi se retourner les cartes de la main du joueur courant

    // return; On ne retourne aucune valeur
}

storePlayedCard = (player,card) => {
	// On stocke la carte jouée dans le tableau des cartes jouées (variable playedCards qu'on définira au préalable hors de la fonction) à l'index du joueur courant (player)

	let storePlayedCards = ['Carte jouée'];

	// return; On ne retourne aucune valeur
	return playedCards;
}

toggleCurrentPlayerHandDisplay = () => {
	// On affiche ou on cache la main du joueur courant (on définit le state isHandDisplayed sur l'inverse de l'état actuel du state isHandDisplayed)

	this.state_isHandDisplayed();

	// return; On ne retourne aucune valeur
	return isHandDisplayed;
}

toggleCurrentPlayerPointsDisplay = () => {
	// On affiche ou on cache les cartes obtenues par le joueur courant (on définit le state isPlayerPointsDisplayed sur l'inverse de l'état actuel du state isPlayerPointsDisplayed)

	this.state_isPlayerPointsDisplayed();

	// return; On ne retourne aucune valeur
	return isPlayerPointsDisplayed;
}

togglePlayerAreaDisplay = (player) => {
	// On affiche ou on cache la zone d'un joueur (on définit la propriété displayed du state player sur l'inverse de son état actuel)
	// Je complèterai par d'autres éléments plus tard (notamment la rotation des zones)

    // return; On ne retourne aucune valeur
}

getPlayerPoints = (player) => {
	// On définit playerPoints comme étant égal à la propriété points DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT)

	return playerPoints;
}

getPlayerCards = (player) => {
	// On définit playerPoints comme étant égal à la propriété cards DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT)

	return playerCards;
}

switchPlayer = (state_currentPlayer) => {
	let nextPlayer = state_currentPlayer++;

	toggleHand();
	toggleCurrentPlayerPointsDisplay();
	togglePlayerAreaDisplay(nextPlayer);

	state_currentPlayerPoints = getPlayerPoints(nextPlayer);
	state_currentPlayerCards = getPlayerCards(nextPlayer);

	// On fait attendre pendant 5 secondes

	togglePlayerAreaDisplay(state_currentPlayer);

	state_currentPlayer = nextPlayer; // Ne pas oublier plus tard de définir les dos et devants de carte de la main en fonction du joueur courant

	toggleCurrentPlayerPointsDisplay();

    // return; On ne retourne aucune valeur
}

togglePlayedCardsDisplay = () => {
	// On affiche ou on cache les cartes jouées pendant la manche à la place de la zone des points (on définit le state displayPlayedCards sur l'inverse de son état actuel)

    // return; On ne retourne aucune valeur
}

preparePointsDisplay = () => {
	toggleHand();
	toggleCurrentPlayerPointsDisplay();

	showPlayedCards();
}

getMinPlayedCard = (playedCards) => {
	// On stocke dans la variable minCard la carte avec la valeur la plus faible dans le tableau playedCards

	let minCard = ('1');
	let PlayedCards = ['1'];

	return minCard;
}

getMaxPlayedCard = (playedCards) => {
	// On stocke dans la variable maxCard la carte avec la valeur la plus élevée dans le tableau playedCards

	let maxCard = ('15');
	let PlayedCards = ['15'];

	return maxCard;
}

isPlayedCardUnique = (card,playedCards) => {
	// On compte le nombre de fois où card est présent dans le tableau playedCards

	// S'il est supérieur à 1, on renvoie faux

	return false;

	// Sinon on renvoie vrai

	return true;
}

getRoundWinner = (card,playedCards) => {
	// On récupère l'index du tableau où est la carte gagnante et on le stocke dans la variable index

	let winner = index++;
	return winner;
}

storeGainedPoints = (player,points) => {
	// On ajoute (push) à la propriété points DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT) chaque élément du tableau points (boucle foreach)

	// On profite de la boucle foreach précédente pour stocker dans une variable pointsSum la somme des points gagnée, puis on ajoute cette variable pointsSum à la propriété pointsTotal DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT)

    // return; On ne retourne aucune valeur
}

setSimpleTie = (card,playedCards) => {
	// Cette fonction sera utilisée lorsqu'il y a égalité (donc que deux joueurs ont la carte la plus forte ou la plus faible)

	// On définit la variable simpleTie préalablement définie hors de la fonction sur vrai

	// On supprime les valeurs correspondant à card du tableau playedCards (avec un foreach comparant les valeurs du tableau playedCards à card)

	return playedCards;
}

toggleEndingScreenDisplay = () => {
	// On affiche ou on cache l'écran de fin (on définit le state displayEndingScreen sur l'inverse de son état actuel)

    // return; On ne retourne aucune valeur
}

defineWinners = (players) => {
	let playersScore = []; // On ajoute le score de chaque joueur (situé dans players -> player1/2/3/4 -> pointsTotal) avec une boucle foreach dans ce tableau au format clé => valeur, avec la clé correspondant au n° du joueur, et la valeur correspondant à ses points

	// On compare les scores de chaque joueur avec une boucle for en commençant au 2ème joueur.
	// Si le score du joueur courant est plus faible que le joueur précédent, on le supprime du tableau.

	return playersScore.keys();
}

toggleWinner = (player) => {
	// On définit la propriété winner DU STATE player (PAS DE LA VARIABLE MISE EN ARGUMENT) sur l'inverse de son état actuel)
	// Il ne faudra pas oublier de définir le fait que ce state entraîne l'affichage d'une couronne à côté du joueur dans l'écran de fin et met son nom en doré

    // return; On ne retourne aucune valeur
}

endGame = (players) => {
	let winners = defineWinners(players);

	// Pour chaque élément du tableau winners, on exécute la fonction toggleWinner() avec l'élément du tableau en paramètre.

	toggleEndingScreenDisplay();

    // return; On ne retourne aucune valeur
}