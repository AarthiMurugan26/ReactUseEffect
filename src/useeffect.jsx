import React, { useEffect } from "react";
import './App.css';

export const UseEffectSelect = () => {


 const list ={countries: ['India', 'Pakistan', 'Nepal'],
    states: {
        India: ['TamilNadu', 'Kerala', 'Karnataka'],
            Pakistan : ['Sindh', 'Islamabad', 'Dir'],
                Nepal : ['Gandaki', 'Lumbini', 'Karnali'],
},
    cities: {
        TamilNadu: ['Chennai', 'Kancipuram', 'Chengalpattu'],
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
const [states, setStates] =React.useState([]);
const [cities, setCities] = React.useState([]);
useEffect(()=>{
    if (selectedCountry) {
    setStates(list.states[selectedCountry]);
    setSelectedState(''),
    setCities([]);
    }
}, [selectedCountry]
);
useEffect(()=>{
    if(selectedState){
        setCities(list.cities[selectedState]);
    }
},[selectedState]);

return(
    <div>
        <h1>USE EFFECT IN REACT</h1>
        <label>Country</label>
        <select value={selectedCountry}  onChange={(e) => setSelectedCountry(e.target.value)} >

        <option value="">Select Country</option>
          {list.countries.map((country) => (
            <option key={index} value={country}>
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
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          <label>City: </label>
          <select value="" onChange={(e) => console.log(e.target.value)}>
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