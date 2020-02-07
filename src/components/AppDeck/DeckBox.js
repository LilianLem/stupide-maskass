import React from 'react';
import DeckPart from './DeckPart'
import './DeckBox.css'

export default class DeckBox extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let drawnCards= [];
		if(this.props.settings.drawValue != 0 && this.props.settings.displayDraw == true) {
			drawnCards.push(this.props.settings.drawValue);
		}
		if(drawnCards !== undefined && this.props.settings.drawValue2 != 0 && this.props.settings.displayDraw2 == true) {
			drawnCards.push(this.props.settings.drawValue2);
		}

        let deckAreaCards;
        if(drawnCards !== undefined)
        {
        	deckAreaCards = drawnCards.map(value => {
                let cardStyleClasses = 'DeckPart ';
                if(value < 0)
                    cardStyleClasses += 'neg'
                else if(value > 0 && value <= 3)
                    cardStyleClasses += 'pos1'
                else if(value >= 4 && value <= 7)
                    cardStyleClasses += 'pos2'
                else if(value >= 8 && value <= 10)
                    cardStyleClasses += 'pos3'
                else
                    cardStyleClasses += 'unknown'

                return (<DeckPart value={value} cardStyleClasses={cardStyleClasses} />)
            });
        }
        else { deckAreaCards = null; }

		return (
            <div className="DeckBox">
                <DeckPart cardStyleClasses="DeckPart deck" />
                {deckAreaCards}
            </div>
		)
	}
}