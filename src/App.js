import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <img alt="Logo" src={logo}/>
    </div>
  );
}

export default App;
