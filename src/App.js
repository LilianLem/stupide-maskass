import React from 'react';
import AppLeftCol from './components/AppCol/AppLeftCol/AppLeftCol'
import AppRightCol from './components/AppCol/AppRightCol/AppRightCol'
import AppDeck from './components/AppDeck/AppDeck'
import AppPoints from './components/AppPoints/AppPoints'
import AppHand from './components/AppHand/AppHand'
import './App.css';

function App() {
    return (
    <div className="App">
        <AppLeftCol/>
        <AppRightCol/>
        <AppDeck/>
        <AppPoints/>
        <AppHand/>
    </div>
    );
}

export default App;
