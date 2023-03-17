import React from 'react';

// import logo from './logo.svg';
import './App.css';
import food from './food';
import {Choice} from './helpers'

function App() {
  return (
    <div className="App">
      <Choice items={food}/>
    </div>
  );
}

export default App;
