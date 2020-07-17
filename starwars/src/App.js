import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from "./components/Character";
import styled from 'styled-components';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [data, setData] =useState([]);

useEffect( () => {
  axios.get("https://swapi.py4e.com/api/people")
  .then(response => {
    console.log(response.data.results)
    setData(response.data.results)
  })
  .catch(error => {
    console.log("Found Error", error)
  });
}, []);

const App = styled.div`
&:hover {
  background:black;
  color:red;
}

`;



  return (
    <App className="App">
      <h1 className="Header">Characters</h1>

     {data.map(data => {
       return (<CharacterList
        key={data.id}
        name={data.name}
        films={data.films}
       />
       )
       
     })}
       
     
    </App>
  );
}

export default App;
