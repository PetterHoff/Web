import React, { useState } from 'react';
import '../App.css';

function App() {
  const initialState = {
    beds: 'X',
    pool: 'Yes'
  };

  const [state, setState] = useState(initialState);

  const resetState = () => {
    setState(initialState);
  };

  return (
    <div className="container">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav className="nav">
          <button>Beskrivelse</button>
          <button>Booking</button>
          <button>Kontakt informasjon</button>
          <button>Aktiviteter</button>
        </nav>
      </header>
      <main className="main-content">
        <div className="slideshow">Slideshow</div>
        <div className="info">
          <p>Antall sengeplasser: {state.beds}</p>
          <p>Basseng: {state.pool}</p>
          <button>Mer info</button>
        </div>
        <div className="map">Kart</div>
        <button onClick={resetState} className="reset-button">Reset</button>
      </main>
    </div>
  );
}

export default App;
