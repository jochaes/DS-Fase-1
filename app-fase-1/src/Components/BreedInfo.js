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
			.then(response => {
				console.log("Dog Response Fulfilled")

				var dogResponse = [response.data] //Stores breed  in state
				dogResponse = dogResponse[0].map(image => image)
				console.log(dogResponse)
				setBreedImages(dogResponse) //images are stored in the state
			})
	}

	useEffect(getBreedImages, [])

	const getImages = () => {
		console.log("getImages")

		if (breedInfo.length !== 0) {
			const breed_images = breedImages.map((image, index) => (
				<div key={image.id} className={index == 0 ? "carousel-item active" : "carousel-item"}>
					<img src={image.url} alt="dog breed" className="d-block w-100" />
				</div>
			))

			return breed_images
		} else {
			return "NO IMAGE DATA"
		}
	}

  const getCards = (string, card_code, card_type) => {
    console.log("Building cards for "  + card_code);

    if (string == "" || string == null) {
      return (
				<div className="col">
					<div key="noData-1" className="card border-warning  mb-3" style={{ maxWidth: 18 + "rem" }}>
						<div className="card-body">
							<h5 className="card-title">No hay datos</h5>
						</div>
					</div>
				</div>
      )
    }else{
      const card_info_list = string.split(",")

      const cards = card_info_list.map((card, index) => (
				<div className="col">
					<div key={card_code+ index} className={"card " + card_type + " mb-3" } style={{ maxWidth: 18 + "rem" }}>
						<div className="card-body">
							<h5 className="card-title">{card}</h5>
							<p className="card-text">{ index + 1}</p>
						</div>
					</div>
				</div>
			))

			return cards
    }

  }

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>{breedInfo.name}</h1>{" "}
				</div>
				<div className="col">
					<img src={breedInfo.image.url} className="img-fluid" />{" "}
				</div>
			</div>

			<div className="row">
				<div className="col">
					<h3> Peso </h3>
					<p> Este tipo de razas tienen un peso de entre {breedInfo.weight.metric} kilogramos.</p>
				</div>
				<div className="col">
					<h3>Altura</h3>
					<p>Además pueden alcanzar una altura de {breedInfo.height.metric} centímetros</p>
				</div>
			</div>

			<div className="row text-center">

				<div className="row">
					<h3>Crianza</h3>
				</div>

				<div className="row row-cols-1 row-cols-md-3 g-4">
        {getCards(breedInfo.bred_for, "crianza", "border-primary")}
        </div>
			</div>

      <div className="row">
        <div className="col">
          <h3>Grupo de Raza</h3>
          <p>{breedInfo.breed_group}</p>
        </div>

        <div className="col">
          <h3>Esperanza de Vida</h3>
          <p>Logran tener una esperanza de vida de entre {breedInfo.life_span}</p>
        </div>

      </div>

      <div className="row text-center">

        <div className="row">
          <h3>Temperamento</h3>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
        {getCards(breedInfo.temperament, "temperament", "border-primary")}
        </div>
      </div>


      <div className="row text-center">
      <div className="row">
        <h3>Origen</h3>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {getCards(breedInfo.origin, "origin", "border-primary")}
      </div>
      </div>

			<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">{getImages()}</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	)
}

export default BreedInfo
