import React from "react";

const BreedDisplay = ( {breed, onClickhandler} ) => {
 
    return <li> 
                <p>Breed:{breed.name}</p>
                <p>ID:   {breed.id}</p>
                <img src={breed.image.url} alt={breed.name} width="50" height="50"></img>
                <button onClick={onClickhandler} name={breed.name}>show</button> 
            </li> 

}

export default BreedDisplay