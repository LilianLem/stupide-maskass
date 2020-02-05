import React from 'react';
import AppLeftCol from './AppCol/AppLeftCol/AppLeftCol'
import AppRightCol from './AppCol/AppRightCol/AppRightCol'
import AppDeck from './AppDeck/AppDeck'
import AppPoints from './AppPoints/AppPoints'
import AppHand from './AppHand/AppHand'
import './Game.css';

export default class Game extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Game">
                <AppLeftCol/>
                <AppRightCol/>
                <AppDeck/>
                <AppPoints/>
                <AppHand/>
                <button onClick={() => this.props.testMyCode()} className="TestingButton">TEST</button>
            </div>
        );
    }
}