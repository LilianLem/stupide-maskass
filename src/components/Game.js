import React from 'react';
import AppLeftCol from './AppCol/AppLeftCol/AppLeftCol'
import AppRightCol from './AppCol/AppRightCol/AppRightCol'
import AppDeck from './AppDeck/AppDeck'
import AppPoints from './AppPoints/AppPoints'
import AppHand from './AppHand/AppHand'
import './Game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let player = this.props.states.currentPlayer;
        let handSettings = {
            character: this.props.states[`player${player}_character`],
            hand: this.props.states[`player${player}_hand`],
            locked: this.props.states.isHandLocked,
            displayed: this.props.states.isHandDisplayed
        }

        let pointsSettings = {
            cards: this.props.states[`player${player}_gainedPoints`],
            displayed: this.props.states.isPlayerPointsDisplayed
        }

        let deckSettings = {
            displayDraw: this.props.states.displayDraw,
            displayDraw2: this.props.states.displayDraw2,
            drawValue: this.props.states.drawValue,
            drawValue2: this.props.states.drawValue2
        }

        let colSettings = {
            playersNb: this.props.states.playersNb,
            round: this.props.states.round,
            playerAreas: this.props.states.playerAreas,
        }

        for (let i = 1; i <= this.props.states.playersNb; i++) {
            colSettings[`player${i}_character`] = this.props.states[`player${i}_character`];
            colSettings[`player${i}_lastPlayedCard`] = this.props.states[`player${i}_lastPlayedCard`];
        }

        console.log(colSettings);

        return (
            <div className="Game">
                <AppLeftCol settings={colSettings} round={this.props.states.round} />
                <AppRightCol settings={colSettings} />
                <AppDeck settings={deckSettings} />
                <AppPoints settings={pointsSettings} />
                <AppHand settings={handSettings} cardIsChosen={this.props.cardIsChosen} />
                <button onClick={() => this.props.testMyCode()} className="TestingButton">TEST</button>
            </div>
        );
    }
}