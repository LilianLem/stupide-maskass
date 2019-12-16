import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
    <div className="App">
        <div className="App-col App-left-col">
            <div className="Col-top">
                <div className="Col-logo">Aaa</div>
                <div className="Col-manches">Aab</div>
            </div>
            <div className="Col-bottom">
                <div className="Col-playerA Col-player">
                    <h2>Joueur A</h2>
                    <div className="Player-box">
                        <div className="Player-last">CARD</div>
                        <div className="Player-played">CARD</div>
                    </div>
                </div>
                <div className="Col-playerB Col-player">
                    <h2>Joueur B</h2>
                    <div className="Player-box">
                        <div className="Player-last">CARD</div>
                        <div className="Player-played">CARD</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="App-col App-right-col">
            <div className="Col-top">
                <div className="Col-menu"><p>Menu</p></div>
            </div>
            <div className="Col-bottom">
                <div className="Col-playerC Col-player">
                    <h2>Joueur C</h2>
                    <div className="Player-box">
                        <div className="Player-last">CARD</div>
                        <div className="Player-played">CARD</div>
                    </div>
                </div>
                <div className="Col-playerD Col-player">
                    <h2>Joueur D</h2>
                    <div className="Player-box">
                        <div className="Player-last">CARD</div>
                        <div className="Player-played">CARD</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="App-deck">
            <h1>Pioche</h1>
            <div className="Deck-box">
                <div className="Deck-deck Deck-part">DECK</div>
                <div className="Deck-point1 Deck-part">PT1</div>
                <div className="Deck-point2 Deck-part">PT2</div>
            </div>
        </div>
        <div className="App-points">
            <h1>Mes points obtenus</h1>
            <div className="Points-box">
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
                <div className="Points-carte">CARD</div>
            </div>
        </div>
        <div className="App-hand">
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
            <div className="Hand-carte">CARD</div>
        </div>
    </div>
    );
}

export default App;
