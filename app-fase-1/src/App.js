import React from 'react'
import { Outlet } from "react-router-dom";
import './App.css';
import Fondo from './Components/Fondo';
import {useAuth0} from '@auth0/auth0-react'
import NavBar from './Components/NavBar';
function App() {
  const {isAuthenticated} = useAuth0()
  return (


    <div className="App">
              <NavBar />
      <div className='text-wrapper'>

        <h1>Dog Breed</h1>
        <p>Creado por: Brayan Gutierrez y Josue Chaves 
          Prototipo 1</p>
         <Fondo />
      </div>
    </div>


  );
}


export default App;