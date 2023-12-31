import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Travel from './Travel';
import Flower from './Flower';
import TravelResult from './TravelResult';
import FlowerResult from './FlowerResult';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Travel />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/travel/result/:id' element={<TravelResult/>} />
        <Route path='/flower' element={<Flower />} />
        <Route path='/flower/result/:id' element={<FlowerResult/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
