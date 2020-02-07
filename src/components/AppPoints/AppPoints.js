import React from 'react';
import PointsBox from './PointsBox'
import PlayedCard from './PlayedCard'
import './AppPoints.css'

export default class AppPoints extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let enable = false;

		let boxClasses = 'AppPoints';
		if(this.props.playedSettings.displayPlayedCards == true){boxClasses += ' displayPlayedCards'};

		let playedCardsClasses = [];
		this.props.playedSettings.playedCards.forEach((value, cardIndex) => {
			playedCardsClasses[cardIndex] = 'PlayedCard front ' + this.props.playedSettings[`player${cardIndex}_character`];
		});

		let playedCards = this.props.playedSettings.playedCards.map((value, cardIndex) => 
			<PlayedCard value={value} cardStyleClasses={playedCardsClasses[cardIndex]} />
		);

		return (
	        <section className={boxClasses}>
	            {this.props.playedSettings.displayPlayedCards ? (
	            	<>
			            <h1>Cartes jouees</h1>
			            <div className="PlayedCards">
			            	{playedCards}
			            </div>
		            </>
		        ) : (
		        	<>
			            <h1>Mes points obtenus</h1>
			            <PointsBox settings={this.props.settings} />
		            </>
		        )
	            }

	        </section>
		)
	}
}