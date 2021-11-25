import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header'
import { requestWalletPermissions, communicateWithServer } from './Beacon'

function App() {
  return (
    <div className="App">
      <Header />
      <button onClick={requestWalletPermissions}>TEZOS WALLET BRUH</button>
      <button onClick={communicateWithServer}>HELLO WORLD</button>
    </div>
  );
}

export default App;
