import {useAuth0} from '@auth0/auth0-react'
// import BreedSearch from './BreedSearch'


/**
 * Boton que se encarga de cerrar la sesion, se coloca en el navbar 
 */
const LogoutButton = () => {
    const {logout} = useAuth0()
    return (
        <>
        <button className="btn btn-outline-danger" onClick={() => logout() }>Logout</button>
        </>
    )
}

export default LogoutButton