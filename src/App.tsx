import React, {ChangeEvent} from 'react';
import {Input} from "./components/Input";
import './App.css';
import {Button} from "./components/Button";


interface IBmiDetails {
    weight: string;
    height: string;
}

enum  EBmiValue {
    WEIGHT ='weight',
    HEIGHT='height'
}

const initialBmiDetails: IBmiDetails = {
    weight: '',
    height: ''
}

function App() {
    const [bmiDetails,setBmiDetails]=React.useState<IBmiDetails>(initialBmiDetails);
   
    const handleBmiDetailsChange = React.useCallback((event: ChangeEvent<HTMLInputElement>,type= EBmiValue.HEIGHT ) => {
        setBmiDetails(oldValue => ({...oldValue,[type]:event.target.value}));
    },[]);
   const handleCalculateClick = React.useCallback(() =>{
      const {weight,height} = bmiDetails;
      const weightAsNumber = Number(weight);
      const heightAsNumber = Number(height);

      if(isNaN(weightAsNumber) || isNaN(heightAsNumber)){
          alert('Enter valid values');
      }else{
        alert(`Your BMI is: ${(weightAsNumber / Math.pow(heightAsNumber / 100, 2)).toFixed(2)}`);
          setBmiDetails(initialBmiDetails)
      }
   },[bmiDetails]);


  return (
    <div className="App">
      <header className="App-header">
       <Input value={bmiDetails.weight} placeholder='Weight in kg' onChange={(event) => handleBmiDetailsChange(event, EBmiValue.WEIGHT)}/>
          <Input value={bmiDetails.height} placeholder = 'Height in cm' onChange={(event) => handleBmiDetailsChange(event)} />
          <Button onClick={handleCalculateClick}>Calculate</Button>
      </header>
    </div>
  );
}

export default App;
