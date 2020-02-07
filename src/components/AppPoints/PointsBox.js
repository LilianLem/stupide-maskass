import React from 'react';
import PointsCarte from './PointsCarte'
import './PointsBox.css'

export default class PointsBox extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
        let pointsCards;
        if(this.props.settings.cards !== undefined && this.props.settings.displayed == true)
        {
            pointsCards = this.props.settings.cards.map(value => {
                let cardStyleClasses = 'PointsCarte ';
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

                return (<PointsCarte value={value} cardStyleClasses={cardStyleClasses} />)
            });
        }
        else { pointsCards = null; }

		return (
            <>
                {this.props.settings.displayed &&
                    <div className="PointsBox">
                        {pointsCards}
                    </div>
                }
            </>
		)
	}
}