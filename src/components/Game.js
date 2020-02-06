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

        return (
            <div className="Game">
                <AppLeftCol/>
                <AppRightCol/>
                <AppDeck/>
                <AppPoints/>
                <AppHand settings={handSettings} />
                <button onClick={() => this.props.testMyCode()} className="TestingButton">TEST</button>
            </div>
        );
    }
}