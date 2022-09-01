import {useAuth0} from '@auth0/auth0-react'
// import BreedSearch from './BreedSearch'

const LogoutButton = () => {
    const {logout} = useAuth0()
    return (
        <>
        <button className="btn btn-outline-danger" onClick={() => logout() }>Logout</button>
            
            {/* <BreedSearch /> */}
        </>
    )
}

export default LogoutButton