import React from "react"

const BreedDisplay = ({ breed, onClickhandler }) => {
	// return <li>
	//             <p>Breed:{breed.name}</p>
	//             <p>ID:   {breed.id}</p>
	//             <img src={breed.image.url} alt={breed.name} width="50" height="50"></img>
	//             <button onClick={onClickhandler} name={breed.name}>show</button>
	//         </li>

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
