import React from "react";
import {useAuth0} from '@auth0/auth0-react'
const Profile = () =>{
    const {user, isAuthenticated} = useAuth0()
    return (
        isAuthenticated && (
            <div className="Profile">
                <img scr = {user.picture}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    )
}
export default Profile