import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './components/DogList.css'
export const DogContext = createContext();

export const App = () => {


  const [selectedDog, setSelectedDog] = useState({
    dog: ''
  });

  return (
    <DogContext.Provider value={[selectedDog, setSelectedDog]} >
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Route path='/About' component={About} ></Route>
      </Router>
    </DogContext.Provider>

  )
}