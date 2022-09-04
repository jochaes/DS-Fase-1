import React, { useState, useEffect } from "react"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"

import SearchFilter from "./SearchFilter"
import BreedList from "./BreedList"
import BreedInfo from "./BreedInfo"
import BreedDisplay from "./BreedDisplay"
import NavBar from "./NavBar"
import Fondo from "./Fondo"

const BreedSearch = () => {
	const { isAuthenticated, isLoading } = useAuth0()

	//StateHook for Breeds data
	const [breeds, setBreeds] = useState([]) //Empty because we want to retrieve the data from the api
	const [searchFilter, setSearchFilter] = useState("") //Search bar for countries



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


	const showButton = event => {
		console.log(event.target.name)
		setSearchFilter(event.target.name)
	}

	//Function that shows breeds
	const showBreedImages = () => {
		if (searchFilter === "") {
			return []
		} else {
			console.log(searchFilter)
			const regex = new RegExp(`${searchFilter}`, "gi") //Regular expression to get the name upper or lower case
			const filteredNames = breeds.filter(breed => breed.name.match(regex) !== null) //Filter the names with that regex
			if (filteredNames.length > 10) {
				return <p>too many matches, specify another filter</p> //This must be done different, because Countries expect a ul element not a string, maybe we can change Countries to accept errors.
			} else {
				if (filteredNames.length === 1) {
					console.log(filteredNames[0].id)
					return <BreedInfo breedInfo={filteredNames[0]} />
				} else {
					const breedArrayFinal = filteredNames.map(breed => (
						<BreedDisplay key={parseInt(breed.id)} breed={breed} onClickhandler={showButton} />
					))
					return <BreedList breedArray={breedArrayFinal} />
				}
			}
		}
	}

	//Handlers
	//Handle when searchbox text it's modified
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
