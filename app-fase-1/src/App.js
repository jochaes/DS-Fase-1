import React from 'react'
import { Outlet } from "react-router-dom";
import './App.css';
import Fondo from './Components/Fondo';
import {useAuth0} from '@auth0/auth0-react'
import Textos from './Components/Textos';
import NavBar from './Components/NavBar';
function App() {
  const {isAuthenticated} = useAuth0()
  return (
    <div className="App">
      <div className='text-wrapper'>
        <h1>Dog Breed</h1>
        <p>Creado por: Brayan Gutierrez y Josue Chaves 
          Prototipo 1</p>
         
      </div>
    </div>
  );
}


export default App;