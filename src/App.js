
import './App.css';
import React from 'react';
 import { useEffect } from 'react';
function App() {
  
     const list ={countries: ['India', 'Pakistan', 'Nepal'],
    states: {
        India: ['TamilNadu', 'Kerala', 'Karnataka'],
            Pakistan : ['Sindh', 'Islamabad', 'Dir'],
                Nepal : ['Gandaki', 'Lumbini', 'Karnali'],
},
    cities: {
        TamilNadu: ['Chennai', 'Kanchipuram', 'Chengalpattu'],
            Kerala: ['Kochi', 'Trivandrum'],
                Karnataka: ['Bangalore', 'Mangalore'],
                    Sindh: ['Karachi'],
                       Islamabad:['Athal','Babri','Badhalan'],
                       Gandaki:['Pokhara','Besisahar'],
                       Lumbini:['Butwal','Ramgram'],
  }
}


const [selectedCountry, setSelectedCountry] = React.useState('');
const [selectedState, setSelectedState] = React.useState('');
const [selectedCity, setSelectedCity] = React.useState('');
const [states, setStates] =React.useState([]);
const [cities, setCities] = React.useState([]);
useEffect(()=>{
    if (selectedCountry) {
    setStates(list.states[selectedCountry]);
    // eslint-disable-next-line
    setSelectedState(''),
    setCities([]);
    setSelectedCity('');
    }
}, 
// eslint-disable-next-line
[selectedCountry]
);
useEffect(()=>{
    if(selectedState){
        setCities(list.cities[selectedState]);
    }
},
// eslint-disable-next-line
[selectedState]
);

return(
    
      <div className="App-header">
        <h1>USE EFFECT IN REACT</h1>
        <label>Country</label>
        <select value={selectedCountry}  onChange={(e) => setSelectedCountry(e.target.value)} >

        <option value="">Select Country</option>
          {list.countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <label>State: </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <label>City: </label>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
    </div>
)
    
 
}

export default App;
