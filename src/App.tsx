import React from 'react';
import logo from './logo.svg';
import './App.css';
import img9209 from './IMG_9209.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={img9209} alt="Geo Mapper" style={{width: '100%', maxWidth: '600px', marginTop: '20px'}} />
      </header>
    </div>
  );
}

export default App;
