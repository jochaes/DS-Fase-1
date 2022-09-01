import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const BreedInfo = ({ breedId }) => {
  const [breedInfo, setBreedInfo] = useState([]);

  //Gets the Breed by its Id
  const getBreedImages = () => {
    console.log("Sending Get request to WeatherAPI");
    const dog_api_key = process.env.REACT_APP_API_KEY;

    axios
      .get(
        `https://api.thedogapi.com/v1/images/search?x-api-key=${dog_api_key}?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=1&limit=9&breed_ids=${breedId.id}`
      ) //Get request to api (query="Capital","Country")
      .then((response) => {
        console.log("Dog Response Fulfilled");

        var dogResponse = [response.data]; //Stores breed  in state
        dogResponse = dogResponse[0].map((image) => image);
        setBreedInfo(dogResponse); //images are stored in the state
      });
  };

  useEffect(getBreedImages, []);

  const getImages = () => {
    console.log("getImages");

    if (breedInfo.length != 0) {
      const breed_images = breedInfo.map((image) => (
        <li key={image.id}>
          <img src={image.url} alt="Image of dog breed" height="50" width="50"></img>
        </li>
      ));

      return breed_images;
    } else {
      return "NO IMAGE DATA";
    }
  };

  // //Gets the temperature from the alreade stored weather
  // const getTemperature = () =>
  //   weather.length === 0 ? "NO DATA" : weather[0].current.temperature;

  // //Gets Image from already stored weather
  // const getWeatherIcon = () =>
  //   weather.length === 0 ? "NO DATA" : weather[0].current.weather_icons[0];

  // //Gets Wind speed and direction from already stored data in state
  // const getWind = () =>
  //   weather.length === 0
  //     ? "NO DATA"
  //     : weather[0].current.wind_speed.toString() +
  //       " mph direction " +
  //       weather[0].current.wind_dir.toString();

  return (
    <div>
      <h1>Informacion del {breedId.name}</h1>
      <p>Peso: { breedId.weight.metric } kg</p>
      <ul>{getImages()}</ul>

      
    </div>

    // <div>
    //   <h2>{country.name.common}</h2>
    //   <p>
    //     Capital: {country.capital[0]}
    //     <br></br>
    //     cca2: {country.cca2}
    //   </p>

    //   <h3>Languages</h3>
    //   <ul>
    //     {Object.values(country.languages).map((lang) => (
    //       <li key={lang}> {lang} </li>
    //     ))}
    //   </ul>

    //   <img
    //     src={country.flags.png}
    //     alt={country.name.common + "flag"}
    //     width="150"
    //     height="100"
    //   ></img>

    //   <h3>Weather in {country.capital[0]}</h3>

    //   <p>
    //     <strong>Temperature:</strong> {getTemperature()}
    //   </p>
    //   <img
    //     src={getWeatherIcon()}
    //     alt={country.name.common + "weather icon"}
    //     width="75px"
    //     height="75px"
    //   ></img>
    //   <p>
    //     <strong>Wind:</strong> {getWind()}
    //   </p>
    // </div>
  );
};

export default BreedInfo;
