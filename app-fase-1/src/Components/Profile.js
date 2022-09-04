import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import NavBar from "./NavBar"
import Fondo from "./Fondo"

const Profile = () => {
	const { user, isAuthenticated } = useAuth0()

	console.log(user);
	if (isAuthenticated) {
		return (
			<div className="container">
				<Fondo />
				<div className="row">
					<NavBar />
					<img scr={user && user.picture} alt={user.nickname} width={'100'} />
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className="container">
				<Fondo />

				<div className="row">
					<NavBar />
					<h3>Para ver el Perfil debe Iniciar Sesión</h3>
				</div>
			</div>
		)
	}
}

export default Profile
