import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

import SearchFilter from './Components/SearchFilter';
import BreedList from './Components/BreedList';
import BreedInfo from './Components/BreedInfo';
import BreedDisplay from './Components/BreedDisplay';


function App() {

  //StateHook for Breeds data 
  const [breeds, setBreeds] = useState([]) //Empty because we want to retrieve the data from the api
  const [searchFilter, setSearchFilter] = useState('') //Search bar for countries 


  //Retrieve Breed data from RestAPI
  const getBreedsAPI = () => {
    console.log("Sending Get request to CountriesAPI")
    axios.get("https://api.thedogapi.com/v1/breeds?limit=200&page=0") //Get request to api
      .then( response => {
        console.log("Response Fulfilled")
        const breedsResponse = response.data
        console.log(breedsResponse)
        setBreeds(breedsResponse)             //countries are stored in the state
      } )
  }
  useEffect(getBreedsAPI,[])
  
  //Function that shows breeds
  const showBreedImages = () => {
    if (searchFilter === ""){
      return []
    }else{
      const regex = new RegExp(`${searchFilter}`, "gi") //Regular expression to get the name upper or lower case
      const filteredNames = breeds.filter( breed =>  breed.name.match(regex) !== null) //Filter the names with that regex
      if(filteredNames.length > 10){
        return <p>too many matches, specify another filter</p> //This must be done different, because Countries expect a ul element not a string, maybe we can change Countries to accept errors.
      }else{
        if(filteredNames.length === 1){
          console.log(filteredNames[0].id);
          return <BreedInfo breedId={filteredNames[0].id} />

        }else{
          
          const breedArrayFinal = filteredNames.map(breed => <BreedDisplay key = {parseInt(breed.id)} breed={breed} onClickhandler={showButton} />)
          return <BreedList breedArray={breedArrayFinal}/>
        }
        
      }
    }
  }

  //Handlers
  //Handle when searchbox text it's modified
  const handleSearchFilterChange = (event) => setSearchFilter(event.target.value)
  
  const showButton = (event) => {
    console.log(event.target.name);
    setSearchFilter(event.target.name)
  }


  return (
    <div>
      <h1>Dog Breeds!</h1>
      <SearchFilter value={searchFilter} onChange={handleSearchFilterChange}/>
      { showBreedImages() }
    </div>
  );
}

export default App;
