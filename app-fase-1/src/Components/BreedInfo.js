import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const BreedInfo = ({ breedInfo }) => {
  const [breedImages, setBreedImages] = useState([])
  const dog_api_key = process.env.REACT_APP_API_KEY

  //Gets the Breed Images by its Id
  const getBreedImages = () => {
    console.log("Sending Get request to Dog API")
  
    axios
      .get(
        `https://api.thedogapi.com/v1/images/search?x-api-key=${dog_api_key}?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=1&limit=9&breed_ids=${breedInfo.id}`
      ) //Get request to api (query="Capital","Country")
      .then((response) => {
        console.log("Dog Response Fulfilled")

        var dogResponse = [response.data]; //Stores breed  in state
        dogResponse = dogResponse[0].map((image) => image)
        setBreedImages(dogResponse); //images are stored in the state
      })
  }

  useEffect(getBreedImages,[])



  const getImages = () => {
    console.log("getImages");

    if (breedInfo.length !== 0) {
      const breed_images = breedImages.map((image) => (
        <li key={image.id}>
          <img src={image.url} alt="dog breed" height="50" width="50"></img>
        </li>
      ));

      return breed_images;
    } else {
      return "NO IMAGE DATA";
    }
  };

  return (
    <div>

      <h1>Informacion del {breedInfo.name}</h1>
      <p>Peso: { breedInfo.weight.metric } kg</p>
      <ul>{getImages()}</ul>
      
    </div>
  );
};

export default BreedInfo;
