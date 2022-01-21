import React from 'react';
import {Input} from "./components/Input";
import './App.css';
import {Button} from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Input/>
          <Button>Click me!</Button>
      </header>
    </div>
  );
}

export default App;
