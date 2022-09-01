import React from "react";
import {useAuth0} from '@auth0/auth0-react'
import NavBar from "./NavBar";

const Profile = () =>{
    const {user, isAuthenticated} = useAuth0()

    if (isAuthenticated) {
        return (            
        <div>
            <NavBar/>
            <img scr = {user.picture}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
        )
    }else{
        return (
            <div>
             <NavBar/>
             <h3>Para ver el Perfil debe Iniciar Sesión</h3>   
            </div>
        )
    }
}
export default Profile;