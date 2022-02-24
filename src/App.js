import React from 'react';
import { Provider as QueryProvider } from 'urql';
import client from './api/urql';
import PokemonGenerator from './PokemonGenerator.js';
import './App.css';

const App = () => (
  <QueryProvider value={client}>
    <div className="App">
      <div className="App-header">
        <PokemonGenerator />
      </div>
    </div>
  </QueryProvider>
);

export default App;
