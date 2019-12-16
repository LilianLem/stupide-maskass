import React from 'react';
import AppLeftCol from './components/AppLeftCol'
import AppRightCol from './components/AppRightCol'
import AppDeck from './components/AppDeck'
import AppPoints from './components/AppPoints'
import AppHand from './components/AppHand'
import logo from './logo.svg';
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
