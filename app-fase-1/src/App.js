import React from 'react'
import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Fondo from './Components/Fondo';
import {useAuth0} from '@auth0/auth0-react'
function App() {
  const {isAuthenticated} = useAuth0()
  return (
    <div className="App">
      <div className='text-wrapper'>
        <h1>Dog Breed</h1>
        <p>Creado por: Brayan Gutierrez y Josue Chaves 
          Prototipo 1</p>
          {isAuthenticated ?
         <LogoutButton/>
         :
         <LoginButton/>}
      </div>
        
        
      <Fondo/>
    </div>
  );
}


export default App;