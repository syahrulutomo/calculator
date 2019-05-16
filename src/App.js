import React from 'react';
import Result from './components/result';
import Numbers from './components/numbers';
import Operators from './components/operators';
import Formatter from "./components/formatter";
import './App.css';

function App() {
  return (
    <div className="App">
      <Result />
      <Formatter/>
      <Numbers />
      <Operators />

    </div>
  );
}

export default App;
