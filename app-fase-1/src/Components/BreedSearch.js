import React, { useState, useEffect } from "react"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"

import SearchFilter from "./SearchFilter"
import BreedList from "./BreedList"
import BreedInfo from "./BreedInfo"
import BreedDisplay from "./BreedDisplay"
import NavBar from "./NavBar"
import Fondo from "./Fondo"

/**
 * Este compoenente se encarga de llamar al api, para pedir la lista de información de las razas 
 * disponibles. 
 * Muestra una barra de búsqueda, y cada vez que el usuario escribe, la lista se actualiza, 
 * para buscar la raza con el nombre que más se parezca a la busqueda. 
 */
const BreedSearch = () => {
	const { isAuthenticated, isLoading } = useAuth0()

	//StateHook for Breeds data
	const [breeds, setBreeds] = useState([]) //Empty because we want to retrieve the data from the api
	const [searchFilter, setSearchFilter] = useState("") //Search bar for countries



	/**
	 * Carga la lista de la informacion de las razas, llamando al API 
	 */
	const loadBreedsInfo = () => {

		if(isAuthenticated) {
			console.log("Sending Get request to Dog-API")
			axios
				.get("https://api.thedogapi.com/v1/breeds?limit=200&page=0") //Get request to api
				.then(response => {
					console.log("Response Fulfilled")
					const breedsResponse = response.data
					console.log(breedsResponse)
					setBreeds(breedsResponse) //countries are stored in the state
				})
		} else {
			setBreeds([])
			console.log("User must be logged in to send the request to Dog-API")
		}
	}
	
	useEffect(loadBreedsInfo,[])

	/**
	 * Cada tarjeta tiene un boton de show, cuando este se presiona, la barra de busqueda 
	 * se actualiza con el nombre de la raza que se presionó, para cargar esa vista. 
	 */
	const showButton = event => {
		console.log(event.target.name)
		setSearchFilter(event.target.name) // Actualiza la barra de búsqueda 
	}

	
	/**
	 * Esta funcion crea las tarjetas de las razas, para mostraralas en la busqueda, y
	 * cuando solo una tarjeta haga match con la busqueda carga la vista de información 
	 * de esa raza. 
	 * Esta funcion se llama cada vez que se actualiza la barra de busqueda. 
	 */
	const showBreedImages = () => {
		if (searchFilter === "") {
			return []
		} else {
			console.log(searchFilter)
			const regex = new RegExp(`${searchFilter}`, "gi") //Se crea una expresion regular que no distinga entre mayusculas y minusculas 
			const filteredNames = breeds.filter(breed => breed.name.match(regex) !== null) //Se filtran los nombres con esa exp regular 
			if (filteredNames.length > 10) {//Si hay más de 10 razas no se cargan los resultados, con el fin de no abrumar al usuario 
				return <p>Hay muchas coincidencias, siga escribiendo su búsqueda.</p> 
			} else {
				if (filteredNames.length === 1) { //Si queda sólo una muestre la info de esta misma 
					console.log(filteredNames[0].id)
					return <BreedInfo breedInfo={filteredNames[0]} />
				} else {  //Si quedan entre 2 - 10, entonces las muestra 
					const breedArrayFinal = filteredNames.map(breed => (
						<BreedDisplay key={parseInt(breed.id)} breed={breed} onClickhandler={showButton} />
					))
					return <BreedList breedArray={breedArrayFinal} />
				}
			}
		}
	}

	//Handlers
	/**
	 * Manejador para que cuando se modifique la barra de busqueda se ejecute la funcion de buscar 
	 */
	const handleSearchFilterChange = event => setSearchFilter(event.target.value)

	if (isAuthenticated) {
		return (
			<div>
				<NavBar />
				<div className="container fondo_contenedor">
					<Fondo />

					<div className="row">
						<SearchFilter value={searchFilter} onChange={handleSearchFilterChange} />
						{showBreedImages()}
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
						<h3>Para Buscar debe haber iniciado sesión.</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default BreedSearch
