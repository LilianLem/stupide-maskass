import React from 'react';
import AppLeftCol from './components/AppCol/AppLeftCol/AppLeftCol'
import AppRightCol from './components/AppCol/AppRightCol/AppRightCol'
import AppDeck from './components/AppDeck/AppDeck'
import AppPoints from './components/AppPoints/AppPoints'
import AppHand from './components/AppHand/AppHand'
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