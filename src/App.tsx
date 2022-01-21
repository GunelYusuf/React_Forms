import React, {ChangeEvent} from 'react';
import {Input} from "./components/Input";
import './App.css';
import {Button} from "./components/Button";




function App() {
    const [name,setName]=React.useState('');
    const handleNameChange = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    },[]);
    console.log('something happened');
  return (
    <div className="App">
      <header className="App-header">
       <Input value={name} onChange={handleNameChange}/>
          <Button>Click me!</Button>
      </header>
    </div>
  );
}

export default App;
