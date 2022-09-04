import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import NavBar from "./NavBar"
import Fondo from "./Fondo"

const Profile = () => {
	const { user, isAuthenticated } = useAuth0()

	console.log(user)
	if (isAuthenticated) {
		return (
			<div>
				<NavBar />
				<div className="container fondo_contenedor">
					<Fondo />
					<div className="row">
						<img scr="http://lh3.googleusercontent.com/a-/AFdZucqZx9s9i1hMbJ4paPlt97sD94C-iAi8LdV5FBOm=s96-c" alt={user.nickname} width={"100"} />
						<h2>{user.name}</h2>
						<p>{user.email}</p>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div>
				<NavBar />

				<div className="container fondo_contenedor">
					<Fondo />
					<div className="row">
						<h3>Para ver el Perfil debe Iniciar Sesión</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default Profile
