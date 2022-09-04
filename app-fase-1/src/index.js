import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Routes

import Profile from './Components/Profile';
import BreedSearch from './Components/BreedSearch';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider domain = {domain} clientId = {clientId} redirectUri = {window.location.origin}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="search" element={<BreedSearch/>} />
          <Route path="profile" element={<Profile/>} /> 
        </Routes>
        
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals();