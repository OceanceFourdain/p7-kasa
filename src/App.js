import React, { useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Logement from './Pages/Logements';
import Error from './Pages/404';

import Header from './Pages/Assets/Header';
import Footer from './Pages/Assets/Footer';
import reportWebVitals from './reportWebVitals';
import { AppContext } from "./AppContext";
import dataLogement from "./data/logements.json";

reportWebVitals();

const App = () => {
  const [data, setData] = useState([]);

  // Catch and store datas
  useEffect(() => {
    const fetchData = async () => {
      setData(dataLogement);
    };
    fetchData();
  }, []);
  
  return(
    <BrowserRouter>
      <AppContext.Provider value={data}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="about" exact element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App;