import React, { useState, useEffect } from 'react'

import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Fondo from './Components/Fondo';
import Textos from './Components/Textos';
import Profile from './Components/Profile'
import BreedSearch from './Components/BreedSearch';

import {useAuth0} from '@auth0/auth0-react'

function App() {
  const {isAuthenticated} = useAuth0()

  return (
    <div className="App">
      <Textos txt = "Dog Breed"/>
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      <Profile/>
      <BreedSearch />
    </div>
  );
}

export default App;