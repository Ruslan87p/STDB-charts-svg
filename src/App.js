import './App.css';
import {useEffect, useState} from 'react';
import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from './pages/home';
import {AppError} from "./components/error/error";
import { Pilot } from './components/pilot/pilot';

function App() {

  const API = 'https://swapi.dev/api';
  const [planets, setPlanets] = useState(null);
  const [vehicles, setVehicles] = useState(null);
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  const getData = async (paramsType) => {
    const res = await fetch(`${API}${paramsType}`);
    if (!res.ok) {
      setError(true)
      throw new Error(`Could not fetch ${paramsType}, received ${res.status}`);
    }
    return await res.json();
  };

  const getAllPeople = async () => {
    const res = await getData(`/people/`).then( ppl => {
      if (ppl) {
        setPeople(ppl);
        setLoading(false);
      }
    });
    return res;
  };

  const getAllPlanets = async () => {
    const res = await getData(`/planets/`).then( planets => {
      if (planets) {
        setPlanets(planets);
        setLoading(false);
      }
    });
    return res;
  };

  // const getPilotById = async (id) => {
  //   const res = await getData(`/people/${id}`).then( pilot => {
  //     if (pilot) {
  //       setPlanets(pilot);
  //       setLoading(false);
  //     }
  //   });
  //   return res;
  // };

  const getAllVehicles = async () => {
    const res = await getData(`/vehicles/`).then( vehicles => {
      if (vehicles) {
        setVehicles(vehicles);
        setLoading(false);
      }
    });

    return res;
  };
  
  useEffect( () => {
    setLoading(true);
    getAllPlanets();
    getAllVehicles();
    getAllPeople();
  }, [])



  return (
    error ?  <AppError></AppError> :
    <section>
      <Routes>
          <Route path="/"
            element={<HomePage
            vehicles={vehicles}
            people={people}
            planets={planets}
            error={error}
            loading={loading}/>} 
          />
        <Route exact path="people/:id" element={<Pilot />} />
        <Route path="*" element={ <h1>Page not found</h1> } />
      </Routes>
    </section>
  );
}

export default App;

