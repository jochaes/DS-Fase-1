import React from "react"
/**
 * @param breed Json con la informacion de la raza 
 * @param onClickhandler 
 */
const BreedDisplay = ({ breed, onClickhandler }) => {

	return (
		<div className="col">
			<div className="card text-center text-bg-light h-100">
				<img src={breed.image.url} className="card-img-top" alt={breed.name} />
				<div className="card-body">
					<h5 className="card-title">Breed: {breed.name}</h5>
					<p className="card-text">The id is: {breed.id}</p>
				</div>
				<div className="card-footer">
					<button className="btn btn-primary btn-lg " onClick={onClickhandler} name={breed.name}>
						More Info
					</button>
				</div>
			</div>
		</div>
	)
}

export default BreedDisplay
