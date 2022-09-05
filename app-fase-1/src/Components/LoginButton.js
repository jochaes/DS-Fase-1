import {useAuth0} from '@auth0/auth0-react'


/**
 * Boton para realizar el login, que se va a colocar en el navbar 
 */
const LoginButton = () => {
    const {loginWithRedirect} = useAuth0()
    return (
        <button className="btn btn-outline-primary" onClick={() => loginWithRedirect() } >Login</button>
    )

}
export default LoginButton;

