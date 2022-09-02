import React from 'react'
import { Outlet } from "react-router-dom";

import './App.css';

import Fondo from './Components/Fondo';
import Textos from './Components/Textos';

import NavBar from './Components/NavBar';

// import {useAuth0} from '@auth0/auth0-react'

function App() {
  // const {isAuthenticated} = useAuth0()

  return (

    
    <div className='container'>
      <div className='row'>

      <NavBar />
      <Textos txt = "Dog Breed"/>
      <Fondo/>

      </div>
    </div>
  );
}


export default App;